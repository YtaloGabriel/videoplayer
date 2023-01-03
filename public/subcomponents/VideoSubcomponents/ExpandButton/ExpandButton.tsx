import React, {useContext} from 'react';

import styles from './ExpandButton.module.css'
import { GlobalContext } from '../../../GlobalContext';

export default function ExpandButton () {
  const {fullScreenHandle} = useContext(GlobalContext)  

  const toggleFullScreenMode = () => {
    if (!fullScreenHandle.active) {
      fullScreenHandle.enter();
    } else {
      fullScreenHandle.exit();
    }
  }

  return (
    <>
      <button className={styles.button} onClick={toggleFullScreenMode}>Expand</button>
    </>
  )
}