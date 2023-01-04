import { useRouter } from "next/router"
import { IVideoInfo, videosList } from "../../public/videosList"
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../public/GlobalContext";

import VideoComponent from "../../public/components/VideoComponent/VideoComponent";
import RecommendedList from "../../public/components/RecommendedList/RecommendedList";
import VideoInfo from "../../public/components/VideoInfo/VideoInfo";

import styles from './video.module.css';

export interface IVideoTitle {
  title: string | undefined;
}

export default function Video() {
  const {theaterMode} = useContext(GlobalContext)
  const { query } = useRouter();
  
  const [videoInfo, setVideoInfo] = useState<IVideoInfo | null>(null);

  // Check if the video id exists
  useEffect(() => {
    const id = Number(query.video);

    const video = videosList
      .filter((video: IVideoInfo) => {
        return video.id === id
      });

    if (video.length) {
      setVideoInfo(video[0]);
    }

  }, [query.video])

  // Page renderization
  return (
    <>
      {videoInfo &&  
        <section className={`${styles.pageGrid} ${theaterMode && styles.theaterMode}`}>
          <VideoComponent
            id={videoInfo.id}
            url={videoInfo.url}
          />
          
          <RecommendedList/>
          <VideoInfo title={videoInfo.title}/> 
        </section>
      }
    </>
  )
}