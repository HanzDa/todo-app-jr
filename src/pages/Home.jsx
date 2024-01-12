import styles from '@/assets/styles/home.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTasks } from '@/features/todosSlice';

export default function Home() {
    const [tasks, setTasks] = useState([]);

    const dispatch = useDispatch();
    async function getTasks() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1&completed=false')
            const data = await response.json();

            setTasks(data);
            dispatch(addTasks(data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.imgContainer}>
                <img src='src\assets\images\todo-list.svg' alt="Todo list" />
            </div>

            <div className={styles.container}>
                <h1 className={styles.title}>Todo App</h1>

                <p className={styles.description}>
                    Welcome to the Todo App!, here you can manage your everyday tasks with ease.
                </p>

                <div className={styles.grid}>
                    <p>
                        You have <strong>{tasks.length}</strong> tasks left in your list
                    </p>

                    <Link className={styles.link} to={'/todos'}>See pending taks</Link>
                </div>
            </div>
        </section>
    );
}
