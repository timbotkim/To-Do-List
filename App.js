import AddTodo from "./To Do List Project/components/AddTodo";
import TodoItem from "./To Do List Project/components/TodoItem";
import { useState } from "react"; 

function App() {
    const [todo, setTodo] = useState([])

    const getItem = (item) =>{
        setTodo((prevState)=>{
            return {...prevState, item}
        })
    }

    const getCompleted = (id) =>{
        setTodo((prevState)=>{
            return prevState.filter((item, index)=>{
                return index !== id; 
            })
        }) 
    }

    return (
        <div className="todo">
            <AddTodo item={getItem}/>
            {todo && todo.map((todo, index)=>(
                <TodoItem id={index} item={todo} completed={getCompleted}/>
            ))}
        </div>
     ); 
}

export default App;
