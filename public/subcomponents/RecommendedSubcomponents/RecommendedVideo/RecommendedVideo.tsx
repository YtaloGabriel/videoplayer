import { useContext } from 'react';
import { GlobalContext } from '../../../GlobalContext';

import Link from 'next/link';
import Image from 'next/image';

import styles from './RecommendedVideo.module.css';

export interface IRecommendedVideo {
  id: number;
  thumb: string;
  title: string;
  category: string;
}

export default function RecommendedVideo ({id, thumb, title}: IRecommendedVideo) {
  const {setVideoRunning} = useContext(GlobalContext);
  
  const handleLinkClick = () => {
    setVideoRunning(false);
  }

  return (
    <Link href={`/video/${id}`} onClick={handleLinkClick} className={styles.link}>
      <Image className={styles.image} width="126" height="70" src={thumb} alt="Thumbnail do Vídeo"/>
      <p className={styles.title}>{title}</p>
    </Link>
  )
}