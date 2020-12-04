
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React,{useState,useEffect} from "react"


function App() {

  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus]= useState('all');
  const [filteredTodos, setFilteredTodos] = useState([])
  //run once when app satarted
  useEffect(()=>{
    getLocalTodos();
  },[])
    //use effect
    useEffect(()=>{
      filterHandler();
      saveLocalTodods();
    },[todos,status]);
  
  
  //functions

  const filterHandler = () =>{
    switch(status){
      case 'completed': 
        setFilteredTodos(todos.filter(todo=>todo.completed===true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed===false))
        break


      default:
        setFilteredTodos(todos);
        break


    }
  }
  const saveLocalTodods = () =>{

    localStorage.setItem('todos',JSON.stringify(todos))
   
  }
  const getLocalTodos = () =>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
     let todoLocal=JSON.parse(localStorage.getItem('todos',JSON.stringify(todos)))
    setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
          <header>
      <h1>Milo's Todo List</h1>
    </header>
    <Form  setStatus={setStatus} inputText = {inputText} todos={todos} setTodos = {setTodos} setInputText={setInputText}/>
    <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos ={todos}/>
    </div>
  );
}

export default App;
