import qrModel from "../models/qrModel.js";
import QRCode from "qrcode";

export const generateQrCode = async (req, res) => {
    const websiteUrl = 'https://portfolio.himansu.in';  // The URL for QR code generation
    try {
        // Generate the QR code as a Data URL (Base64-encoded PNG)
        const qrCodeBuffer = await QRCode.toBuffer(websiteUrl);

        // Save the QR code URL in the database
        const qrCodeUrl = `data:image/png;base64,${qrCodeBuffer.toString("base64")}`;
        const qrData = new qrModel({ websiteUrl, qrCodeUrl });
        await qrData.save();

        // Set headers for file download
        res.setHeader("Content-Disposition", 'inline; filename="qrcode.png"');  // inline for viewing in Postman
        res.setHeader("Content-Type", "image/png");

        // Send the QR code as a binary response (buffer)
        res.send(qrCodeBuffer);
        
    } catch (error) {
        console.error('Error generating QR code:', error);
        res.status(500).send('Failed to generate QR code');
    }
}
