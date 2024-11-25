import express from "express";
import connectDB from "./database/config.js";
import dotenv from'dotenv';
dotenv.config();
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import productRouter from './routes/productRoutes.js';


const PORT = process.env.PORT;


connectDB();

const app = express();

app.get('/', (req, res)=>{
  res.send('API is running...')
})
app.use('/api/products', productRouter);


app.use(notFound);
app.use(errorHandler);


app.listen(PORT, ()=>{
  console.log(`app is listening on port ${PORT}`)
})