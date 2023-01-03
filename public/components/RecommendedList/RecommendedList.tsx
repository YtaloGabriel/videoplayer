import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

import styles from './RecommendedList.module.css';

export default function RecommendedList() {
  const {theaterMode} = useContext(GlobalContext);

  return <section className={`${styles.recommended} ${theaterMode && styles.theaterMode}`}>recommended</section>
}