import { Router } from "express";
import auth from "../middleware/auth.js";
import { getCertificates, createCertificate, updateCertificate, deleteCertificate } from "../controllers/certificateController.js";

const router = Router();
router.get("/", getCertificates);
router.post("/", auth, createCertificate);
router.put("/:id", auth, updateCertificate);
router.delete("/:id", auth, deleteCertificate);
export default router;