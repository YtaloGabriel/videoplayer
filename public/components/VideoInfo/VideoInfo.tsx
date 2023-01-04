import { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'
import { IVideoTitle } from '../../../pages/video/[video]';

import styles from './VideoInfo.module.css'

export default function VideoInfo({title}: IVideoTitle) {
  const {theaterMode} = useContext(GlobalContext);

  return (
    <section className={`${styles.videoInfo} ${theaterMode && styles.theaterMode}`}>
      {title}
    </section>
  );
}