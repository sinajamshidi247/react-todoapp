import React from 'react'


const Todo = ({todo,text,todos,setTodos}) => {

    const deleteHandler = () => {

        setTodos(todos.filter((el)=> el.id !== todo.id))

    }

    const completeHandler = () =>{
        setTodos(todos.map((item)=>{
            if(item.id ===todo.id){
                return {
                    ...item, completed:!item.completed
                }
 
            
            }
            return item;
        }))
    };

    
    return(
        <div className = "todo">
            <li className= {`todo-item ${todo.completed ? "completed":""}`}>{text}</li>
            <button onClick={completeHandler} className = "complete-btn">
                <i className="fas fa-check"></i>
                </button>
            <button onClick={deleteHandler} className = "trash-btn">

                <li className="fas fa-trash"></li>
            </button>

        </div>

    );
}

export default Todo