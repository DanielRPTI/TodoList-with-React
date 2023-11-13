import { Circle, Trash } from 'phosphor-react';
import styles from './Todo.module.css'

interface TodoProps { 
  todos: { 
     id: string;
    text: string;
    done: boolean
  };
  onDoneTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export function Todo ({todos, onDoneTodo, onDeleteTodo}: TodoProps ) {

function handleDeleteTodo () {
   onDeleteTodo(todos['id'])
 }
function handleDoneTodo (){
  onDoneTodo(todos['id'])
}

return(
  <div>
    <section className={styles.container}>
            <button 
              type='submit'
              className={styles.btnCircle}
              onClick={handleDoneTodo}
              >
              <Circle size={20}/>
              <p>{todos['text']}</p>
            </button>

            <button
              type='submit'
              className={styles.deleteBtn}
              onClick={handleDeleteTodo}
              >
             <Trash size={20}/>
            </button>
    </section>
  </div>
)
}