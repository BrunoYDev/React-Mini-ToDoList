import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { TodoListProvider } from './providers/TodoListContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoListProvider>
    <App />
    </TodoListProvider>
  </React.StrictMode>,
)
