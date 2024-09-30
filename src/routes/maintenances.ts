import express from 'express';
import { GetAll, GetById, Filtered } from "../controllers/maintenance";

const router = express.Router();
router.get("/GetAll", GetAll);
router.get("/GetById/:Id", GetById);
router.get("/Filtered", Filtered);

export default router;