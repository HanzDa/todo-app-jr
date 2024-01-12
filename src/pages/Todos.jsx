import { useSelector } from 'react-redux'
import styles from '@/assets/styles/todos.module.css'

export default function Todos() {
    const todos = useSelector(state => state.todos.value)
    
    return (
        <div className={styles.todosContainer}>
            <h2 className={styles.todosTitle}>This are all the todos</h2>
            <ul className={styles.todosList}>
                {todos.map(todo => (
                    <li key={todo.id} className={styles.todoItem}>
                        <span>{todo.title}</span>
                        <div className={styles.todoActions}>
                            <button>Delete</button>
                            <button>Edit</button>
                            <button>Done</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
