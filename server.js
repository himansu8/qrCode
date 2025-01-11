import express from 'express'
import './dbConnect.js'
import qrRoute from './routes/qrRoute.js'
import path from 'path';
import cors from 'cors';

// Get the directory name from import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);


const app = express();
const port = 8080;
app.use(cors());


app.use(express.json());

// Serve static files (like images) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/qrcode", qrRoute);



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.listen(port,()=>{
    console.log(`the server starting at port no ${port}`)
})