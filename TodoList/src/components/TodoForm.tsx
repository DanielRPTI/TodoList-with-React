import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './TodoForm.module.css'
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';



export function TodoForm ({createNewTodo}: any)  {
  const [newTodoText, setNewTaskText] = useState('')
  const fieldIsEmpty = newTodoText.length === 0
  
  function handleNewTaskChange (event: FormEvent){
    const target = event.target as HTMLInputElement
    setNewTaskText(target.value)
  }
  function formTodo (event: FormEvent){
    event.preventDefault()
    const newTodo = {
      id: uuidv4(),
      text: newTodoText,
      done: false,
    }
    createNewTodo(newTodo)
    setNewTaskText('')
  }

  return (
    <form 
      className={styles.tasks}
      onSubmit={formTodo}
    >
      <input 
      className={styles.insertTask}
      name='addTodo'
      type="text" 
      placeholder='Add a new todo'
      onChange={handleNewTaskChange}
      value={newTodoText}

      />
      <button 
        disabled={fieldIsEmpty}
        className={styles.btnCreateTask} 
        type='submit'>
          Criar 
        <PlusCircle/>
      </button>
    </form>
  )
}
