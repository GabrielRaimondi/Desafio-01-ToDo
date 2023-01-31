import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskBox } from './components/TaskBox';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.app}>
        <TaskBox />
      </main>
    </div>
  )
}