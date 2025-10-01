import express from "express";
import { addVisit, getVisit } from "../controllers/antenatal.controller.js";

const router = express.Router();

router.post("/visits", addVisit);
router.get("/visits/:userId", getVisit);

export default router;
