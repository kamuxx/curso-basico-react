import React, { useState, useEffect } from "react";
import { useTaskContext } from '../../context/TaskContext'

import Button from "../commons/Button.component";

function TaskForm() {

  const { taskData, setTasks, storeTasks, editingTask } = useTaskContext();
  const [errors, setErrors] = useState({});
  const [taskEdit, setTaskEdit] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskEdit((prev) => ({ ...prev, [name]: value }));
  };

  const clearErrors = () => {
    console.log("clearErrors");
    setErrors({});
  };

  useEffect(() => {
    if (editingTask) {
      setTaskEdit(editingTask);
      console.log("Editing Task:", editingTask);
    }
  }, [editingTask]);

  const validateForm = (task) => {
    const newErrors = {};

    if (!task.name.trim()) newErrors.name = "El nombre es requerido";
    if (!task.description.trim())
      newErrors.description = "La descripción es requerida";
    if (!task.dueDate.trim())
      newErrors.dueDate = "La fecha de vencimiento es requerida";

    return newErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Build task object: if editingTask exists, merge with taskEdit; otherwise use formData
    let task;
    if (editingTask) {
      task = { ...editingTask, ...taskEdit };
    } else {
      task = {
        name: taskEdit.name?.trim() ?? formData.get("name") ?? "",
        description: taskEdit.description?.trim() ?? formData.get("description") ?? "",
        dueDate: taskEdit.dueDate?.trim() ?? formData.get("dueDate") ?? "",
      };
    }

    const newErrors = validateForm(task);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    clearErrors();
    storeTasks(task);
    setTaskEdit({});
  };

  
  return (
    <form
      className="bg-white/90 p-4 rounded-md shadow-md flex flex-col gap-4"
      onSubmit={handleFormSubmit}
      onReset={() => {
        setTaskEdit({});
        clearErrors();
      }}
      autoComplete="off"
    >
      <InputGroup
        label="Nombre"
        id="name"
        name="name"
        type="text"
        placeholder="Ingrese el Nombre"
        value={taskEdit.name ?? ""}
        autofocus={true}
        onChange={handleInputChange}
      />
      <InputGroup
        label="Descripción"
        id="description"
        name="description"
        type="text"
        placeholder="Ingrese la Descripción"
        value={taskEdit.description ?? ""}
        onChange={handleInputChange}
      />
      <InputGroup
        label="Fecha de Vencimiento"
        id="dueDate"
        name="dueDate"
        type="date"
        placeholder="Ingrese la Fecha de Vencimiento"
        value={taskEdit.dueDate ?? ""}
        onChange={handleInputChange}
      />

      {/* errores */}
      {Object.keys(errors).length > 0 && (
        <div className="text-xs text-red-500">
          <ul>
            {Object.entries(errors).map(([key, msg]) => (
              <li key={key}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      <hr />
      <div className="flex justify-end gap-2">
        <Button
          type="reset"
          text="Cancelar"
          color="gray"
          onClick={clearErrors}
        />
        <Button type="submit" text="Guardar" color="blue" />
      </div>
    </form>
  );
}

const InputLabel = ({ label }) => {
  return (
    <label className="text-sm font-semibold text-gray-700/80">{label}</label>
  );
};

const InputField = ({
  id,
  name,
  type,
  placeholder = "Ingrese el Valor",
  autofocus = false,
  onChange,
  value=''
}) => {
  return (
    <input
      id={id}
      name={name}
      autoFocus={autofocus}
      className="px-4 py-2 rounded-md border focus:outline-none focus:border-indigo-300 border-gray-300  transition-all duration-300 ease-in-out"
      type={type}
      placeholder={placeholder}      
      onChange={onChange}
      value={value}
    />
  );
};

const InputGroup = ({
  label,
  id,
  name,
  type,
  placeholder = "Ingrese el Valor",
  autofocus = false,
  value='',
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <InputLabel label={label} />
      <InputField
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autofocus={autofocus}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TaskForm;
