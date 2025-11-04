import express from "express";
import { listTasks, addTask, editTask, removeTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", listTasks);
router.post("/", addTask);
router.put("/:id", editTask);
router.delete("/:id", removeTask);

export default router;