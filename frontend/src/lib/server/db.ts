import mongoose from "mongoose";

declare global {
  var __invoiceIqMongooseConn: typeof mongoose | undefined;
}

export const connectMongo = async (): Promise<typeof mongoose> => {
  if (global.__invoiceIqMongooseConn) {
    return global.__invoiceIqMongooseConn;
  }

  const mongodbUrl = (process.env.MONGODB_URI || "").trim();

  if (!mongodbUrl) {
    throw new Error("MONGODB_URI is missing. Add it to frontend/.env.local with a mongodb:// or mongodb+srv:// value.");
  }

  if (!/^mongodb(\+srv)?:\/\//.test(mongodbUrl)) {
    throw new Error(`Invalid MONGODB_URI scheme. Expected mongodb:// or mongodb+srv://, got: ${mongodbUrl}`);
  }

  const conn = await mongoose.connect(mongodbUrl);
  global.__invoiceIqMongooseConn = conn;
  return conn;
};
