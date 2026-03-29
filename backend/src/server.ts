import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
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
const nextApp = next({ dev: isDev, dir: frontendDir });
const nextHandler = nextApp.getRequestHandler();

app.set("trust proxy", 1);

app.use(cookieParser());
app.use(express.json({ limit: "12mb" }));
app.use(express.urlencoded({ extended: true, limit: "12mb" }));

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
        await nextApp.prepare();
        await initializeMongoDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

void startServer();