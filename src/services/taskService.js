import Task from "../models/Task.js";

export const getAllTasks = () => Task.findAll();

export const createTask = (data) => Task.create(data);

export const updateTask = (id, data) =>
  Task.update(data, { where: { id } });

export const deleteTask = (id) =>
  Task.destroy({ where: { id } });