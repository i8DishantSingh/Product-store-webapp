import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";


dotenv.config();
const port = process.env.PORT || 8000;


const app = express();
app.use(express.json()); // Allows us to accpect json in the body.
app.use("/api/products", productRoutes);
app.listen(port, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});


