import mongoose, { type Document, type Model } from "mongoose";

export interface UserDocument extends Document {
  userName: string;
  email: string;
  avatar: string;
  loginMode: "Google" | "Github";
  refreshToken: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, required: true },
    loginMode: { type: String, enum: ["Google", "Github"], required: true },
    refreshToken: { type: String, required: false, default: null },
  },
  {
    timestamps: true,
  },
);

export const UserModel: Model<UserDocument> =
  (mongoose.models.User as Model<UserDocument> | undefined) ||
  mongoose.model<UserDocument>("User", userSchema);
