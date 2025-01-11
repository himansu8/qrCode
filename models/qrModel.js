import mongoose from "mongoose";

const qrSchema = new mongoose.Schema(
    {
        websiteUrl: { type: String, required: true },
        qrCodeUrl: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model('qrModel', qrSchema, "QR")