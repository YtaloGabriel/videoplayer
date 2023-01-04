import Link from 'next/link';
import styles from './RecommendedVideo.module.css';

export interface IRecommendedVideo {
  id: number;
  thumb: string;
  title: string;
  category: string;
}


export default function RecommendedVideo ({id, thumb, title, category}: IRecommendedVideo) {
  return (
    <Link href={`/video/${id}`}>{title}</Link>
  )
}