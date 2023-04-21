import { createContext, useState } from "react";

interface ITodoListProvider {
  children: React.ReactNode;
}

export interface INote {
  id: string;
  title: string;
  description: string;
}

interface TodoListInterface {
  todoList: INote[];
  setTodoList: React.Dispatch<React.SetStateAction<INote[]>>;
  removeNote: (noteId: string) => void;
}

export const TodoListContext = createContext({} as TodoListInterface);

export const TodoListProvider = ({ children }: ITodoListProvider) => {
  const [ todoList, setTodoList ] = useState<INote[]>([]);

  const removeNote = (noteId: string) => {
    const newTodoList = todoList.filter(item => item.id !== noteId);
    setTodoList(newTodoList);
  }

  return (
    <TodoListContext.Provider value={{ setTodoList, todoList,removeNote}}>
      {children}
    </TodoListContext.Provider>
  );
};
