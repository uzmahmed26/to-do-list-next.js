import { Task } from '../Task';
import styles from './tasks.module.css';

// Define the type for props
interface Task {
  id: string; // Task ID type
  title: string; // Task title type
  isCompleted: boolean; // Completion status type
}

interface TasksProps {
  tasks: Task[]; // Array of tasks
  onComplete: (taskId: string) => void; // Function type for complete
  onDelete: (taskId: string) => void; // Function type for delete
}

export function Tasks({ tasks, onComplete, onDelete }: TasksProps) { // Specify the type for props
  const tasksQuantity = tasks.length; // Corrected spelling
  const completedTasks = tasks.filter(task => task.isCompleted).length; // Corrected spelling

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.texPurple}>Completed</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map(task => (
          <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}
