import React, { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'usar despues estilos propios',
    completed: false,
  },
  {
    id: '2',
    title: 'Hacer luego el login despues de este crud',
    completed: false,
  },
  {
    id: '3',
    title: 'usar JWT',
    completed: false,
  },
]

const App = (): React.JSX.Element => {

  const [todos, setTodos] = useState(mockTodos)

  /**@description function remove a task */
  const handleRemove = (id: string) => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }
  
  return (
    <div className="todoapp">
      <Todos 
        onRemoveTodo={handleRemove}
        todos={todos} 
      />
    </div>
  )
}

export default App
