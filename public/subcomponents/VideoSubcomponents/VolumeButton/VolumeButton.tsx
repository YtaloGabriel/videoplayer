import { GlobalContext } from '../../../GlobalContext';
import { useContext } from 'react';
import { Box, Slider } from '@mui/material'

import styles from './VolumeButton.module.css'
import Image from 'next/image';

import volumeDownIcon from '../../../assets/icons/volumedown.svg';
import volumeUpIcon from '../../../assets/icons/volumeup.svg';

export default function VolumeButton () {
  const {videoElement} = useContext(GlobalContext)

  function volumeText(value: number) {
    const valueToPercent = value / 100;

    if (videoElement.current) {
      videoElement.current.volume = valueToPercent
    }
  
    return `${value}`;
  }
  
  return (
    <div className={styles.volume}>
      <Image src={volumeDownIcon} width="22" height="22" alt="Volume Down Icon"/>
      <Box sx={{ width: 50 }}>
        <Slider
          sx={{ mb: -0.5 }}
          aria-label="Volume"
          size="small"
          color="primary"
          defaultValue={80}
          getAriaValueText={volumeText}
          valueLabelDisplay="auto"
          step={10}
          min={0}
          max={100}
        />
      </Box>
      <Image src={volumeUpIcon} width="22" height="22" alt="Volume Up Icon"/>
    </div>
  )
}