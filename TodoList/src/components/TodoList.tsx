import { Trash } from 'phosphor-react';
import styles from './TodoList.module.css'
interface Todo {
  id: number;
  text: string;
  completed: boolean
}

interface TodoProps { 
  todos: Todo[];
  toggleTodo: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function TodoList ({todos, toggleTodo, onDeleteTask}: TodoProps ) {

  // function handleDeleteTask (id:number) {
  //   onDeleteTask(id)
  // }

return(
  <div className={styles.todoList}>
      <div className={styles.header}>
        <header>
          <div>
            <p>Tasks Create <span>5</span></p>
            <p>Concluidas <span>2 de 5</span></p>
          </div>
        </header>
      </div>
    <div className={styles.list}>
    <ul>
        <li >
          <label>
            <input 
              type="checkbox" 
            />
            <strong>Lavar a louça</strong>
          </label>
          <button>
            <Trash size={20}/>
          </button>
        </li>
        <li >
          <label>
            <input 
              type="checkbox" 
            />
            <strong>Estudar mais</strong>
          </label>
          <button>
            <Trash size={20}/>
          </button>
        </li>
    </ul>
    </div>
  </div>
)
}