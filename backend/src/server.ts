import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import fs from "fs";
import { createServer } from "http";
import next from "next";
import initializeMongoDB from "../ConnectDB";
import AuthRouter from "../Router/Auth.Router";
import SellerManagementRouter from "../Router/SellerManagement.Router";
import UserInterfaceRouter from "../Router/UserInterface.Router";
import DeliveryRouter from "../Router/Delivery.Router";
import ProductRouter from "../Router/Product.Router";
import AnalyticsRouter from "../Router/Analytics.Router";

const app = express();
const PORT = Number(process.env.PORT || 3000);
const isDev = process.env.NODE_ENV !== "production";
const frontendDir = process.env.FRONTEND_DIR || path.resolve(process.cwd(), "../frontend");
const nextBuildIdFile = path.join(frontendDir, ".next", "BUILD_ID");
const useWebpackInDev = process.env.NEXT_DEV_BUNDLER !== "turbopack";
const nextApp = next({
    dev: isDev,
    dir: frontendDir,
    hostname: "0.0.0.0",
    port: PORT,
    ...(isDev
        ? {
            webpack: useWebpackInDev,
            turbopack: !useWebpackInDev,
        }
        : {}),
});
const nextHandler = nextApp.getRequestHandler();

app.set("trust proxy", 1);

app.use(cookieParser());
app.use(express.json({ limit: "12mb" }));
app.use(express.urlencoded({ extended: true, limit: "12mb" }));

// Ensure all Next static assets are always delegated to Next first.
app.all(/^\/_next\/.*/, (req, res) => {
    return nextHandler(req, res);
});

app.use("/api/auth", AuthRouter);
app.use("/api/sellerManagement", SellerManagementRouter);
app.use("/api/userInterface", UserInterfaceRouter);
app.use("/api/delivery", DeliveryRouter);
app.use("/api/product", ProductRouter);
app.use("/api/analytics", AnalyticsRouter);
app.get("/ping", (_req, res) => {
    res.status(200).json({ message: "pong" });
});

app.use("/api", (_req, res) => {
    res.status(404).json({ message: "API route not found" });
});

app.all(/.*/, (req, res) => {
    return nextHandler(req, res);
});

async function startServer() {
    try {
        if (!isDev && !fs.existsSync(nextBuildIdFile)) {
            throw new Error(
                `Missing Next production build at ${nextBuildIdFile}. Run \"npm run build\" in frontend before starting backend production server.`,
            );
        }

        await nextApp.prepare();
        await initializeMongoDB();
        const server = createServer(app);
        const upgradeHandler = nextApp.getUpgradeHandler();

        server.on("upgrade", (req, socket, head) => {
            void upgradeHandler(req, socket, head);
        });

        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} (NODE_ENV=${process.env.NODE_ENV || "development"})`);
            console.log(`Serving Next app from: ${frontendDir}`);
            if (isDev) {
                console.log(`Next dev bundler: ${useWebpackInDev ? "webpack" : "turbopack"}`);
            }
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

void startServer();