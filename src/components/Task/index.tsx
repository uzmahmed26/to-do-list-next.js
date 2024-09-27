import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

// Define the type for props
interface TaskProps {
  task: {
    id: string; // Task ID type
    title: string; // Task title type
    isCompleted: boolean; // Completion status type
  };
  onDelete: (taskId: string) => void; // Function type for delete
  onComplete: (taskId: string) => void; // Function type for complete
}

export function Task({ task, onDelete, onComplete }: TaskProps) { // Specify the type for props
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
