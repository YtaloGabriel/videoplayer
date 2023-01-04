import { useContext } from 'react';
import { GlobalContext } from '../../../GlobalContext';
import Image from 'next/image';

import playIcon from '../../../assets/icons/play.svg';
import pauseIcon from '../../../assets/icons/pause.svg';

import styles from './PlayPauseButton.module.css'

export default function PlayPauseButton () {
  const {
    videoRunning, 
    setVideoRunning, 
    videoElement
  } = useContext(GlobalContext);

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
        <Image src={pauseIcon} width="32" height="32" alt="Pause Icon"/> :
        <Image src={playIcon} width="32" height="32" alt="Play Icon"/>
      }
    </button>
  )
}