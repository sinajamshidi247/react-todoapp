
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React,{useState} from "react"


function App() {
  const [inputText, setInputText] = useState("")
  const [todos,setTodos] = useState([])
  return (
    <div className="App">
          <header>
      <h1>sina's Todo List</h1>
    </header>
    <Form todos={todos} setTodos = {setTodos} setInputText={setInputText}/>
    <TodoList/>
    </div>
  );
}

export default App;
