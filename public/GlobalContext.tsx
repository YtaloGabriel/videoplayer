import { createContext, useRef, useState, SetStateAction, Dispatch, MutableRefObject, useEffect } from "react";
import { FullScreenHandle, useFullScreenHandle } from "react-full-screen";

export const GlobalContext = createContext<any>(null);

export const GlobalStorage = ({children}: any) => {
  const [videoRunning, setVideoRunning] = useState(false);
  const [videoVolume, setVideoVolume] = useState<number>(100);
  const [videoCurrentTime, setVideoCurrentTime] = useState<number | null>(null);
  const [videoSpeed, setVideoSpeed] = useState<number>(1);
  const [timebarValue, setTimebarValue] = useState<number>(0);

  const videoElement = useRef<HTMLVideoElement | null>(null);

  if (videoElement.current) {
    videoElement.current.playbackRate = videoSpeed;
  }

  const fullScreenHandle = useFullScreenHandle();

  const [theaterMode, setTheaterMode] = useState<boolean>(false);

  const [selectedVideosCategory, setSelectedVideosCategory] = useState<string>('music');

  // Set video status from context
  useEffect(() => {
    if (videoRunning) {
      videoElement.current?.play();
    } else {
      videoElement.current?.pause();
    }
  }, [videoRunning, setVideoRunning, videoElement])

  interface ContextValues {
    videoRunning: boolean;
    setVideoRunning: Dispatch<SetStateAction<boolean>>;
    videoElement: MutableRefObject<HTMLVideoElement | null>;
    videoVolume: number;
    setVideoVolume: Dispatch<SetStateAction<number>>;
    videoCurrentTime: number | null;
    setVideoCurrentTime: Dispatch<SetStateAction<number | null>>;
    videoSpeed: number;
    setVideoSpeed: Dispatch<SetStateAction<number>>;
    fullScreenHandle: FullScreenHandle;
    theaterMode: boolean;
    setTheaterMode: Dispatch<SetStateAction<boolean>>;
    selectedVideosCategory: string;
    setSelectedVideosCategory: Dispatch<SetStateAction<string>>;
    timebarValue: number;
    setTimebarValue: Dispatch<SetStateAction<number>>;
  }

  const valuesToReturn: ContextValues = {
    videoRunning,
    setVideoRunning,
    videoElement,
    videoVolume,
    setVideoVolume,
    videoCurrentTime,
    setVideoCurrentTime,
    videoSpeed,
    setVideoSpeed,
    fullScreenHandle,
    theaterMode,
    setTheaterMode,
    selectedVideosCategory,
    setSelectedVideosCategory,
    timebarValue,
    setTimebarValue,
  }

  return (
    <GlobalContext.Provider value={valuesToReturn as ContextValues}>
      {children}
    </GlobalContext.Provider>
  );
}