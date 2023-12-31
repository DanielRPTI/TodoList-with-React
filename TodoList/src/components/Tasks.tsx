import style from './Tasks.module.css'
import { TodoForm} from './TodoForm';
import { useState } from 'react';
import { Todo } from './Todo';
import { TodoEmpty } from './TodoEmpty';
import { TodoDone } from './TodoDone'

interface TodoProps{
  id: string;
  text: string;
  done: boolean;
}
 
export function Tasks(){
  const [todos, setTodos] = useState<TodoProps[]>([])

  function createNewTodo(newTodo: TodoProps){
    setTodos([...todos, newTodo]);
  }

  // Função para mudar o status da atividade para done = true
  function finishedTodo(id: string){
    const changeStatusToTrue: TodoProps[] = [];

    todos.map(todo => {
      if(todo.id === id){
        todo.done = true
      }
      changeStatusToTrue.push(todo)
    })
    setTodos(changeStatusToTrue)
  }

  // Função para deletar uma atividade
  function todoToBeDeleted(id: string){
    const todosFiltered = todos.filter(todo => {
      return todo.id !== id;
    })
    setTodos(todosFiltered);
  }

  const isEmpty = todos.length === 0
  
  // TODO: contar as atividades feitas
  const doneTodo = todos.filter(todo => {
    return todo.done === true
  })
  
  return(
    <>
    <TodoForm createNewTodo={createNewTodo}/>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.todo}>
            <span>Tarefas Criadas</span>
            <div className={style.contentHeader} > {todos.length} </div>
          </div>

          <div className={style.done}>
            <span>Concluídas</span>
            <div> {doneTodo.length} de {todos.length}</div>
          </div>
        </div>
        <div>
          {isEmpty ? <TodoEmpty /> : 
          todos.map(todo => {
            if (todo.done === false) {
             return <Todo 
              todos={todo} 
              key={todo['id']} 
              onDoneTodo={finishedTodo} 
              onDeleteTodo={todoToBeDeleted}
            />
            }
          })
        }
        { 
          todos.map(todo => {
            if (todo.done === true) {
             return <TodoDone 
              todo={todo}  
              key={todo['id']} 
              onDeleteTodo={todoToBeDeleted}/>
            }
          })
        }
        </div>
      </div>
    </>
  )
}