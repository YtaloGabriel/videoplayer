import { IVideoInfo } from '../../videosList';
import { useContext, useRef } from 'react';
import { GlobalContext } from '../../GlobalContext';

import styles from './VideoComponent.module.css';

import PlayPauseButton from '../../subcomponents/VideoSubcomponents/PlayPauseButton/PlayPauseButton';
import VolumeButton from '../../subcomponents/VideoSubcomponents/VolumeButton/VolumeButton';
import TimeStamp from '../../subcomponents/VideoSubcomponents/TimeStamp/TimeStamp';
import PlaySpeed from '../../subcomponents/VideoSubcomponents/PlaySpeed/PlaySpeed';
import TheaterButton from '../../subcomponents/VideoSubcomponents/TheaterButton/TheaterButton';

export default function VideoComponent({id}: IVideoInfo) {
  const {videoElement, setVideoCurrentTime, videoRunning, setVideoRunning} = useContext(GlobalContext)

  const getTimeStamp = () => {
    const currentTimeVideo = videoElement.current.currentTime;
    setVideoCurrentTime(currentTimeVideo);
  }

  const handleClickOnVideoElement = ({target}: any) => {
    if (target === videoElement.current) {
      setVideoRunning(!videoRunning)
    }
  }

  return (
      <section className={styles.videoContainer} onClick={handleClickOnVideoElement}>
        <section className={styles.videoBar}>
          <PlayPauseButton/>
          <VolumeButton />
          <TimeStamp />
          <PlaySpeed />
          <TheaterButton />
        </section>

        <video 
          ref={videoElement}
          className={styles.video}
          onTimeUpdate={getTimeStamp}
        >
          <source src={`../../assets/videos/${id}.mp4`} />
        </video>
      </section>
  )
}