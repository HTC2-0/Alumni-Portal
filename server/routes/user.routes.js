import { Router } from "express";

import {
    registerUser,
    loginUser,
    data
} from "../controllers/user.controller.js";

const router = Router();

router.post("/register",registerUser);
router.post("/login", loginUser);
router.get("/users" , data);

export default router;