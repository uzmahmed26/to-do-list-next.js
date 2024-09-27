import logo from '../../assets/logo.png';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

// Define the type for props
interface HeaderProps {
  handleAddTask: (taskTitle: string) => void; // Function to handle task addition
}

export function Header({ handleAddTask }: HeaderProps) { // Specify the type for props
  const [title, setTitle] = useState<string>(''); // Specify type for state

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) { // Specify type for event
    event.preventDefault();
    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: React.ChangeEvent<HTMLInputElement>) { // Specify type for event
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" /> {/* Alt attribute for accessibility */}
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Add a new task"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button type="submit">Create <AiOutlinePlusCircle size={20} /></button> {/* Add type for button */}
      </form>
    </header>
  );
}
