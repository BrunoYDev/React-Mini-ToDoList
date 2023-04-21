import { useContext } from "react"
import { TodoListContext } from "../../providers/TodoListContext"
import { TodoCard } from "../TodoCard";

export const TodoList= () =>{
const { todoList } = useContext(TodoListContext);


    return (
        <ul>
            {todoList.map(item => (
                <TodoCard key={item.id} title={item.title} description={item.description} id={item.id}/>
            ))}
        </ul>
    )
}