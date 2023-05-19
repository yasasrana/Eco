import { Router } from "express";
const userRoute = Router();
import userController from "../controllers/user.js";
import productController from "../controllers/product.js";

userRoute.get("/api/user/get/:id", userController.getOneUser);
userRoute.get("/api/user/getAll", userController.getUsers);
userRoute.post("/api/user/register", userController.createUser);
userRoute.post("/api/user/login", userController.login);
userRoute.put("/api/user/update/:id", userController.updateUser);
userRoute.delete("/api/user/delete/:id", userController.deleteUser);

userRoute.get("/api/product/get/:id", productController.getOneProduct);
userRoute.get("/api/product/getAll", productController.getProducts);
userRoute.post("/api/product/add", productController.createProduct);
userRoute.put("/api/product/update/:id", productController.updateProduct);
userRoute.delete("/api/product/delete/:id", productController.deleteProduct);


export default userRoute;
