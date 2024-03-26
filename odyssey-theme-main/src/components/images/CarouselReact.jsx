// KindaCode.com
// src/App.jss
import { React, useState } from 'react';
import * as styles from './carouselReact.module.css';

// photos array is passed in using props

function CarouselReact({photos}) {
  // show the photo with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next photo
  // if we are at the end, go to the first photo
  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  // move to the previous photo
  // if we are at the beginning, go to the last photo
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <>
      {/* Render the carousel */}
      <div className={styles.carouselContainer}>
      <div className={styles.sliderContainer}>
        {photos.map((photo) => (
          <div
            key={photo.id}

            // if the photo is the current photo, show it
            className={photos[currentIndex].id === photo.id ? [styles.slide, styles.fade] : [styles.slide]
            }
          >
            <img src={photo.url} alt={photo.title} className={styles.photo} id={photo.id} />
            <div className={styles.caption}>{photo.title}</div>
          </div>
        ))}

        {/* Previous button */}
        <button onClick={prev} className={styles.prev}>
          &lt;
        </button>

        {/* Next button */}
        <button onClick={next} className={styles.next}>
          &gt;
        </button>
      </div>

      {/* Render dots indicator */}
      <div className={styles.dots}>
        <ul id="dots-list">
        {photos.map((photo) => (
          <li
            key={photo.id}
            id={photo.id}
            // highlight the dot that corresponds to the current photo
            className={photos[currentIndex].id === photo.id ? [styles.dot, styles.active] : [styles.dot]}
            // when the user clicks on a dot, go to the corresponding photo
            onClick={() => setCurrentIndex(photos.indexOf(photo))}
          ></li>
        ))}
        </ul>
      </div>
      </div>
    </>
  );
}

export default CarouselReact;