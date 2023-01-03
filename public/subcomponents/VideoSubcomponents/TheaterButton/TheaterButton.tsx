import { useContext } from 'react';
import styles from './TheaterButton.module.css';
import { GlobalContext } from '../../../GlobalContext';

export default function TheaterButton () {
  const {theaterMode, setTheaterMode} = useContext(GlobalContext);

  const toggleTheaterMode = () => {
    setTheaterMode(!theaterMode);
  }

  return (
    <button className={styles.button} onClick={toggleTheaterMode}>
      Theater
    </button>
  )
}