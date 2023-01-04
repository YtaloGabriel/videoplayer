import { useRouter } from "next/router"
import { IVideoInfo, videosList } from "../../public/videosList"
import { useContext, useEffect, useState } from "react";

import VideoComponent from "../../public/components/VideoComponent/VideoComponent";
import styles from './video.module.css';
import RecommendedList from "../../public/components/RecommendedList/RecommendedList";
import VideoInfo from "../../public/components/VideoInfo/VideoInfo";
import { GlobalContext } from "../../public/GlobalContext";

export interface VideoTitle {
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
            thumb={videoInfo.thumb}
            title={videoInfo.title}
            category={videoInfo.category}
          />
          
          <RecommendedList/>
          <VideoInfo title={videoInfo.title}/> 
        </section>
      }
    </>
  )
}