import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './TodoForm.module.css'
import { PlusCircle } from 'phosphor-react';


interface TodoFormProps {
  addTodo: (text:string) =>  void;
}


export function TodoForm ({addTodo}: TodoFormProps)  {
//   const [text, setText] = useState([
//     'Estudar mais React'
//   ])

//   const [newTaskText, setNewTaskText] = useState('')

//   function handleCreateNewTask (event: FormEvent){
//     event.preventDefault()

//     setText([...text, newTaskText])
//     setNewTaskText('')
//   }
//   function handleNewTaskChange (event: ChangeEvent<HTMLInputElement>) {
//     event.target.setCustomValidity('')
//     setNewTaskText(event.target.value)
//   }
//   function handleNewTaskInvalid (event: InvalidEvent<HTMLInputElement>) {
//     event.target.setCustomValidity('Esse campo é obrigatorio!')
//  }
  
  return (
    <form className={styles.Tasks}>
      <input 
      type="text" 
      placeholder='Add a new todo'
      // value={text}
      />
      <button type='submit'>Criar <PlusCircle/></button>
    </form>
  )
}