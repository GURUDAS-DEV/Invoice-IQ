import { Router } from "express";
import { CreateSellerController, DeleteSellerController, GetSellerByIdController, GetSellerController } from "../Controller/SellerManagement.Controller";
import { authMiddleware } from "../middleware/authMiddleware";

const sellerManagementRouter = Router();

// Apply auth middleware to all seller management routes
sellerManagementRouter.use(authMiddleware);

sellerManagementRouter.post("/createSeller", CreateSellerController);
sellerManagementRouter.get("/getSeller/:id", GetSellerByIdController);
sellerManagementRouter.get("/getSeller", GetSellerController);
sellerManagementRouter.delete("/deleteSeller/:id", DeleteSellerController);

export default sellerManagementRouter;