import express from "express";
import {
  addContactHandler,
  getControllerHandler,
  deleteContactHandler,
  emergencyAlertHandler
} from "../controllers/emergency.controller.js";

const router = express.Router();

router.post("/add-contact", addContactHandler);
router.get("/get-contact", getControllerHandler);
router.post("/delete-contact", deleteContactHandler);
router.post("/emergency-alert", emergencyAlertHandler);

export default router;
