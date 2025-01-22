import { Router } from "express";
import { login, register, addToHistory, getUserHistory } from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.route("/login").post(login)
userRoutes.route("/register").post(register)
userRoutes.route("/add_to_activity").post(addToHistory)
userRoutes.route("/get_all_activity").get(getUserHistory)

export default userRoutes;