import { IVideoInfo } from '../../videosList';
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

import styles from './VideoComponent.module.css';

import PlayPauseButton from '../../subcomponents/VideoSubcomponents/PlayPauseButton/PlayPauseButton';
import VolumeButton from '../../subcomponents/VideoSubcomponents/VolumeButton/VolumeButton';
import TimeStamp from '../../subcomponents/VideoSubcomponents/TimeStamp/TimeStamp';
import PlaySpeed from '../../subcomponents/VideoSubcomponents/PlaySpeed/PlaySpeed';
import TheaterButton from '../../subcomponents/VideoSubcomponents/TheaterButton/TheaterButton';
import ExpandButton from '../../subcomponents/VideoSubcomponents/ExpandButton/ExpandButton';
import { FullScreen } from 'react-full-screen';

export default function VideoComponent({id}: IVideoInfo) {
  const {videoElement, setVideoCurrentTime, videoRunning, setVideoRunning, fullScreenHandle, theaterMode} = useContext(GlobalContext)

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
      <FullScreen className={styles.fullScreenElement} handle={fullScreenHandle}>      
        <section className={`${styles.videoContainer} ${theaterMode && styles.theaterMode}`} onClick={handleClickOnVideoElement}>
          <section className={styles.videoBar}>
            <TimeStamp />
            <div className={styles.leftComponents}>
              <PlayPauseButton/>
              <VolumeButton />
            </div>
            <div className={styles.rightComponents}>
              <PlaySpeed />
              <TheaterButton />
              <ExpandButton />
            </div>
          </section>

          <video 
            ref={videoElement}
            className={styles.video}
            onTimeUpdate={getTimeStamp}
          >
            <source src={`../../assets/videos/${id}.mp4`} />
          </video>
        </section>
      </FullScreen>
  )
}