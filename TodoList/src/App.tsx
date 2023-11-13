import styles from './App.module.css'
import './global.css'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'


export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <main>
          <Tasks />
        </main>
      </div>

    </div>
  )
}

