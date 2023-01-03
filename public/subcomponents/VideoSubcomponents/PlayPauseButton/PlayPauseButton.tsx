import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../GlobalContext';
import Image from 'next/image';

import styles from './PlayPauseButton.module.css'

import playIcon from '../../../assets/icons/play.svg';
import pauseIcon from '../../../assets/icons/pause.svg';

export default function PlayPauseButton () {
  const {videoRunning, setVideoRunning, videoElement} = useContext(GlobalContext);

  // Set video status by button click
  const togglePlay = () => {
    setVideoRunning(!videoRunning)
    
    if (videoRunning) {
      videoElement.current?.pause();
    } else {
      videoElement.current?.play();
    }
  }

  return (
    <button className={styles.button} onClick={togglePlay}>
      {videoRunning ? 
        <Image src={pauseIcon} width="36" height="36" alt="Pause Icon"/> :
        <Image src={playIcon} width="36" height="36" alt="Play Icon"/>
      }
    </button>
  )
}