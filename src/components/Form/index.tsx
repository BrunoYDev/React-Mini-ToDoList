import { zodResolver } from "@hookform/resolvers/zod";
import { useForm,SubmitHandler } from "react-hook-form"
import { FormSchema, FormValuesT } from "./schema";
import { useContext } from "react";
import { TodoListContext } from "../../providers/TodoListContext";
import { v4 as uuidv4 } from 'uuid';

export const Form = () =>{

    const { setTodoList, todoList} = useContext(TodoListContext);

    const {register,handleSubmit,formState: { errors }} = useForm<FormValuesT>({
        resolver: zodResolver(FormSchema)
    });

    // Manual Form Type Values
    // type FormValues = {
    //     title: string;
    //     description: string;
    // }

    const submit: SubmitHandler<FormValuesT> = (data) =>{
        const newData = {...data, id: uuidv4()};
        setTodoList([...todoList, newData]);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h2>Adicionar Notas e Tarefas</h2>
            <input type="text" placeholder="Titulo" {...register("title")}/>
            {errors.title? <p>{errors.title.message}</p> : null}
            <textarea placeholder="Digite a tarefa" {...register("description")}></textarea>
            {errors.description? <p>{errors.description.message}</p> : null}
            <button type="submit">Enviar</button>
        </form>
    )
}