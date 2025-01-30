import React, { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types';

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
  const handleRemove = ({id}: TodoId) => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  /**@description function market complete task */
  const handleComplete = ({id, completed}: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if(todo.id === id){
        return{
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)

  }
  
  return (
    <div className="todoapp">
      <Todos 
        onToggleCompleteTodo={handleComplete}
        onRemoveTodo={handleRemove}
        todos={todos} 
      />
    </div>
  )
}

export default App
