import { useContext } from "react";
import { TodoListContext } from "../../providers/TodoListContext";


interface ICard{
    id: string;
    title: string;
    description: string;
}
export const TodoCard = ({title,description,id}: ICard) =>{

    const { removeNote } = useContext(TodoListContext);

    const removeItem = ()=>{
        removeNote(id)
    }

    return (
        <li>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={removeItem}>Remover</button>
        </li>
    )
}