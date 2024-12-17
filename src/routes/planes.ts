import express from 'express';
import { GetAll, GetById, Filtered, Create, Update, Delete } from "../controllers/plane";

const router = express.Router()
router.get("/GetAll", GetAll);
router.get("/GetByRegistration/:registration", GetById);
router.get("/Filtered", Filtered);

router.post("/Create", Create)
router.put("/Update/:registration", Update)
router.delete("/Delete/:registration", Delete)
export default router;