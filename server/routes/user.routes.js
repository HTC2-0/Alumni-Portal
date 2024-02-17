import { Router } from "express";

import {
    registerUser,
    loginUser
} from "../controllers/user.controller.js";

import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/register",registerUser);
router.post("/login", loginUser)

export default router;