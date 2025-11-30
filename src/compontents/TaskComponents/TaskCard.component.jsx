import Button from "../commons/Button.component";

function TaskCard({ task, deleteTask, editTask }) {
  return (
   
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <small>{task.dueDate}</small>
        <div className="flex justify-end gap-2">
          <Button
            type="button"
            text="Editar"
            color="gray"
            onClick={() => editTask(task)}
          />
          <Button
            type="button"
            text="Eliminar"
            color="red"
            onClick={() => deleteTask(task.id)}
          />
        </div>
      </div>
  );
}

export default TaskCard;
