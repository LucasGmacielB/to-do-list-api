import { getAllTasks, createTask, updateTask, deleteTask } from "../services/taskService.js";

export const listTasks = async (req, res) => {
  const tasks = await getAllTasks();
  res.status(200).json(tasks);
};

export const addTask = async (req, res) => {
  const task = await createTask(req.body);
  res.status(201).json(task);
};

export const editTask = async (req, res) => {
  await updateTask(req.params.id, req.body);
  res.status(200).json({ message: "Task updated" });
};

export const removeTask = async (req, res) => {
  await deleteTask(req.params.id);
  res.status(200).json({ message: "Task deleted" });
};