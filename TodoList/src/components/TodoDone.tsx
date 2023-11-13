import { CheckCircle, Trash } from 'phosphor-react';
import styles from './TodoDone.module.css'

interface TodoProps{
todo: {
  id: string;
  text:string;
  done: boolean
}
onDeleteTodo: (id: string) => void;
}

export function TodoDone({todo, onDeleteTodo}: TodoProps){

  function handleDeleteTodo(){
    onDeleteTodo(todo['id'])
  }
  return(
    <div className={styles.container}>
      <div className={styles.btnCircle}>
        <CheckCircle size={24} weight="fill" />
        <p>{todo['text']}</p>
      </div>
      <button
      className={styles.deleteBtn}
      type='submit'
      onClick={handleDeleteTodo}
      >
        <Trash size={24}/>
      </button>
    </div>
  )
}