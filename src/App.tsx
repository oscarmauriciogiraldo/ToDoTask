import React, { useState } from 'react'
import { Todos } from './components/Todos'
import { FilterValue, type TodoId, type Todo as TodoType, TodoTitle } from './types';
import { TODO_FILTERS } from './const';
import { FilterPanel } from './components/FilterPanel';
import styles from './App.module.scss'
import { Header } from './components/Header';

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

  /**@description borrar tareas completadas */
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  /**@description filter function */
  const filterTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({title}: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }
  
  return (
    /* class name instalada todoapp */
    <div className={styles.container}>
      <Header onAddTodo={handleAddTodo}/>
      <div className={styles.containerTask}>
        <Todos 
          onToggleCompleteTodo={handleComplete}
          onRemoveTodo={handleRemove}
          todos={filterTodos} 
        />
      </div>
      <FilterPanel
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted} 
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
