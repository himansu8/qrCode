import express from 'express';
import { generateQrCode } from '../controller/qrController.js';



const router = express.Router();

router.get("/generate",generateQrCode )


export default router;