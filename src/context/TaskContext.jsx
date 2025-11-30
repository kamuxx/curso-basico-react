import { createContext, useState, useEffect, useContext } from "react";
import { tasks as data } from "../tasks";
export const TaskContext = createContext(null);

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    setTasks(data);
  }, []);

  const storeTasks = (task) => {
    console.log("Almacenando tarea:", task);
    if (task.id) {
      setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));
      setEditingTask(null);
      return;
    }
    const maxId = tasks.length === 0 ? 0 : Math.max(...tasks.map((t) => t.id));
    const newTask = { ...task, id: maxId + 1 };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (task) => {
    console.log("Editando tarea con id:", task);
    setEditingTask(task);
  };

  const value = {
    taskData: tasks,
    tasks,
    setTasks,
    storeTasks,
    deleteTask,
    editTask,
    editingTask,
    setEditingTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTaskContext() {
  const ctx = useContext(TaskContext);
  if (ctx === null)
    throw new Error("useTaskContext must be used inside TaskContextProvider");
  return ctx;
}
