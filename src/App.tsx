import React, { useState } from 'react'
import { Todos } from './components/Todos'
import {  FilterValue, type TodoId, type Todo as TodoType } from './types';
import { TODO_FILTERS } from './const';
import { FilterPanel } from './components/FilterPanel';

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  /**@description filter function */
  const filterTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })
  
  return (
    <div className="todoapp">
      <Todos 
        onToggleCompleteTodo={handleComplete}
        onRemoveTodo={handleRemove}
        todos={filterTodos} 
      />
      <FilterPanel
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={() => {}} 
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
