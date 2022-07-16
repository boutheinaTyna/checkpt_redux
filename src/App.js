import './App.css';
import Addtask from "./component/Addtask";
import ListTask from "./component/ListTask";


function App() {
  return (
    <div className="App">
      
       <h1 className= "App-title" >To Do List</h1>
       <Addtask/>
       <ListTask/>

    </div>
  );
}

export default App;
