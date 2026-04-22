import express from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTaskStatus,
} from "../controllers/taskController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTaskStatus);
router.delete("/:id", deleteTask);

export default router;