import {useContext} from 'react'
import TaskList from "./pages/TaskList";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <TaskContextProvider>
        <TaskList />
      </TaskContextProvider>
    </div>
  );
}

export default App;
