import { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'

import styles from './VideoInfo.module.css'
import { VideoTitle } from '../../../pages/video/[video]';

export default function VideoInfo({title}: VideoTitle) {
  const {theaterMode} = useContext(GlobalContext);

  return <section className={`${styles.videoInfo} ${theaterMode && styles.theaterMode}`}>
    {title}
  </section>
}