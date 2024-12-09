import express from 'express';

import { GetAll, GetById, Filtered, Create, Update, Delete } from "../controllers/technician";

const router = express.Router()

router.get("/GetAll", GetAll);
router.get("/GetById/:Id", GetById);
router.get("/Filtered", Filtered);

router.post("/Create", Create)
router.post("/Update/:Id", Update)
router.get("/Delete/:Id", Delete)

export default router;