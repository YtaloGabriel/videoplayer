import { useContext } from 'react';
import { GlobalContext } from '../../../GlobalContext';
import Image from 'next/image';

import theater from '../../../assets/icons/theater.svg';

export default function TheaterButton () {
  const {theaterMode, setTheaterMode} = useContext(GlobalContext);

  const toggleTheaterMode = () => {
    setTheaterMode(!theaterMode);
  }

  return (
    <button className={"videoButton"} onClick={toggleTheaterMode}>
      <Image src={theater} width="22" height="22" alt="Theater Mode Icon"/>
    </button>
  )
}