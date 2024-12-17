import express from 'express';
import { GetAll, GetById, Filtered, Create, Update, Delete } from "../controllers/maintenance";

const router = express.Router();
router.get("/GetAll", GetAll);
router.get("/GetById/:Id", GetById);
router.get("/Filtered", Filtered);

router.post("/Create", Create)
router.put("/Update/:Id", Update)
router.delete("/Delete/:Id", Delete)
export default router;