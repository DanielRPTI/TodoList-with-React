import styles from './App.module.css'
import './global.css'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'


export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <main>
          <TodoForm/>
          <TodoList />
        </main>
      </div>

    </div>
  )
}

