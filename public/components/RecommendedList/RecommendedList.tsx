import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { videosList } from '../../videosList';

import RecommendedVideo, { IRecommendedVideo } from '../../subcomponents/RecommendedSubcomponents/RecommendedVideo/RecommendedVideo';
import CategoryButton from '../../subcomponents/RecommendedSubcomponents/CategoryButton/CategoryButton';

import styles from './RecommendedList.module.css';

export default function RecommendedList() {
  const [categoryData, setCategoryData] = useState<any>(null);
  const [videosByCategory, setVideosByCategory] = useState<any>(null);
  const {selectedVideosCategory} = useContext(GlobalContext)

  const {theaterMode} = useContext(GlobalContext);

  // Get the list of categories from videosList archive
  useEffect(() => {
    const categoriesList = videosList.map(video => video.category);
    const filteredCategories = categoriesList.filter((v, i, a) => a.indexOf(v) === i);
    setCategoryData(filteredCategories);
  
    const filteredVideos = videosList.filter((video) => {
      return video.category === selectedVideosCategory;
    })
    setVideosByCategory(filteredVideos)
  }, [selectedVideosCategory])

  return (
    <section className={`${styles.recommended} ${theaterMode && styles.theaterMode}`}>
    
      <div className={styles.selectedCategory}>
        {categoryData && categoryData.map((category: string) => {
          return <CategoryButton key={category} categoryName={category}/>
        })}
      </div>

      <section className={styles.selectedVideos}>
        {videosByCategory && videosByCategory.map((video: IRecommendedVideo) => (
          <RecommendedVideo 
            key={video.id}
            id={video.id} 
            thumb={video.thumb} 
            title={video.title} 
            category={video.category}
          />
        ))}
        
      </section>
    </section>
  )
}