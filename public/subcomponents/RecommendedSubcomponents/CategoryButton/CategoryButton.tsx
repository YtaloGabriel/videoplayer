import { useContext, useRef } from 'react';
import { GlobalContext } from '../../../GlobalContext';

import styles from './CategoryButton.module.css';

export interface ICategoryButton {
  categoryName: string | undefined;
}

export default function CategoryButton ({categoryName}: ICategoryButton) {
  const buttonElement = useRef<HTMLButtonElement | null>(null)
  const {setSelectedVideosCategory} = useContext(GlobalContext);

  const handleButtonClick = () => {
    if (buttonElement.current) {
      setSelectedVideosCategory(buttonElement.current?.value);
    }

    return null
  }

  return (
    <button ref={buttonElement} className={styles.button} onClick={handleButtonClick} value={categoryName}>
      {categoryName || 'Category'}
    </button>
  )
}