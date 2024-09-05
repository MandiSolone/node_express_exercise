import express from "express";
import userRouter from "./user.route"; 
import employeeRouter from "./employees.route"; 
import productRouter from "./products.route"; 

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/users", userRouter); 
router.use("/employees", employeeRouter);
router.use("/products", productRouter);

export default router;
