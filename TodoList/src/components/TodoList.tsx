import { Circle, Trash } from 'phosphor-react';
import styles from './TodoList.module.css'

interface TodoProps { 
  todos: { 
     id: string;
    text: string;
    isCompleted: boolean};
  onDoneTodo: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TodoList ({todos, onDoneTodo, onDeleteTask}: TodoProps ) {

function handleDeleteTask () {
   onDeleteTask(todos['id'])
 }
function handleDoneTodo (){
  onDoneTodo(todos['id'])
}

return(
  <div className={styles.containerHeader}>
        <header>
          <div className={styles.headerContent}>
            <p className={styles.tasksCreate}>Tasks Create <span>{}</span></p>
            <p className={styles.tasksCompleted}>Completed <span>2 de 5</span></p>
          </div>
        </header>
    <section className={styles.container}>
            <button 
              type='submit'
              className={styles.btnCircle}
              onClick={handleDoneTodo}
              >
              <Circle size={20}/>
            </button>
            <p>{todos['text']}</p>
            <button
              type='submit'
              className={styles.deleteBtn}
              onClick={handleDeleteTask}
              >
             <Trash size={20}/>
            </button>
    </section>
  </div>
)
}