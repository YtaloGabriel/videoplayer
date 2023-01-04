import { useContext, useState } from 'react';
import { GlobalContext } from '../../../GlobalContext';

import styles from './PlaySpeed.module.css';

export default function PlaySpeed () {
  const {setVideoSpeed} = useContext(GlobalContext);
  const [speed, setSpeed] = useState<number>(1);
  
  const handleSelectChange = ({target}: any) => {
    setSpeed(target.value as number);
    setVideoSpeed(target.value as number);
  }

  return (
    <select className={styles.selectSpeed} onChange={handleSelectChange} value={speed}>
      <option value="1.0">1x</option>
      <option value="1.5">1.5x</option>
      <option value="2.0">2x</option>
    </select>
  )
}