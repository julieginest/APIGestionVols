import express from 'express';
import { GetAll, GetById, Filtered } from "../controllers/plane";

const router = express.Router()
router.get("/GetAll", GetAll);
router.get("/GetByRegistration/:registration", GetById);
router.get("/Filtered", Filtered);
export default router;