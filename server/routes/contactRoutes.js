import { Router } from "express";
import auth from "../middleware/auth.js";
import { createMessage, getMessages, deleteMessage } from "../controllers/contactController.js";

const router = Router();
router.post("/", createMessage);
router.get("/", auth, getMessages);
router.delete("/:id", auth, deleteMessage);
export default router;