import { Box, Slider, Stack } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../GlobalContext';

import styles from './TimeStamp.module.css'

export default function TimeStamp () {
  const {
    videoElement, 
    videoCurrentTime, 
    setVideoRunning, 
    timebarValue,
    setTimebarValue
  } = useContext(GlobalContext);

  const [videoMinutes, setVideoMinutes] = useState<number>(0);
  const [videoSeconds, setVideoSeconds] = useState<number>(0);
  const [videoMinutesDuration, setVideoMinutesDuration] = useState<number>(0);
  const [videoSecondsDuration, setVideoSecondsDuration] = useState<number>(0);
  
  // Transformed current time
  const minutes = videoMinutes < 10 ? ('0' + videoMinutes) : videoMinutes;
  const seconds = videoSeconds < 10 ? ('0' + videoSeconds) : videoSeconds;
  
  const allMinutes = videoMinutesDuration < 10 ? ('0' + videoMinutesDuration) : videoMinutesDuration;
  const allSeconds = videoSecondsDuration < 10 ? ('0' + videoSecondsDuration) : videoSecondsDuration;
  
  const handleTimebarChange = (event: Event, newTimebarValue: number | number[]) => {
    setTimebarValue(newTimebarValue as number);

    videoElement.current.currentTime = (videoElement.current.duration / 100) * (newTimebarValue as number);
  };

  // Transform the video current time
  useEffect(() => {
    if (videoElement.current && videoElement.current.duration) {
      setVideoMinutesDuration(Math.floor(videoElement.current.duration / 60) || 0);
      setVideoSecondsDuration(Math.floor(videoElement.current.duration % 60) || 0);
    
      const currentMinutes = Math.floor(videoCurrentTime / 60);
      const currentSeconds = Math.floor(videoCurrentTime % 60);

      setVideoMinutes(currentMinutes);
      setVideoSeconds(currentSeconds);

      // Change timebar and current time values
      const updatedTimebarValue = (videoElement.current.currentTime) / (videoElement.current.duration) * 100

      if (updatedTimebarValue < 100) {
        setTimebarValue(updatedTimebarValue)
      } else {
        // End video
        setTimebarValue(0);
        setVideoRunning(false);
        setVideoMinutes(0);
        setVideoSeconds(0);
      }
    }
  }, [videoCurrentTime, videoElement, setVideoRunning, setTimebarValue]);

  return (
    <div className={styles.timeStamp}>
      <span className={styles.time}>
        {`${minutes}:${seconds}`}
      </span>

      <Box sx={{ width: '100%' }}>
        <Stack spacing={2} direction="row" alignItems="center">
          <Slider value={timebarValue} size="small" onChange={handleTimebarChange} />
        </Stack>
      </Box>

      <span className={styles.time}>
        {`${allMinutes}:${allSeconds}`}
      </span>
    </div>
  )
}