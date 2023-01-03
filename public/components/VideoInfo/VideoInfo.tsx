import { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'

import styles from './VideoInfo.module.css'

export default function VideoInfo() {
  const {theaterMode} = useContext(GlobalContext);

  return <section className={`${styles.videoInfo} ${theaterMode && styles.theaterMode}`}>VideoInfo</section>
}