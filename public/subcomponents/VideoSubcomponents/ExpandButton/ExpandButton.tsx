import React, {useContext} from 'react';

import styles from './ExpandButton.module.css'
import { GlobalContext } from '../../../GlobalContext';
import Image from 'next/image';

import expand from '../../../assets/icons/expand.svg';

export default function ExpandButton () {
  const {fullScreenHandle} = useContext(GlobalContext)  

  const toggleFullScreenMode = () => {
    if (!fullScreenHandle.active) {
      fullScreenHandle.enter();
    } else {
      fullScreenHandle.exit();
    }
  }

  return (
    <>
      <button className={"videoButton"} onClick={toggleFullScreenMode}>
        <Image src={expand} width="22" height="22" alt="Expanded Mode Icon"/>
      </button>
    </>
  )
}