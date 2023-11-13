
import { ClipboardText } from 'phosphor-react'
import style from './TodoEmpty.module.css'

export function TodoEmpty(){
  return(
    <div className={style.container}>
      <ClipboardText size={60} />
      <strong>Você não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}