'use client';

import { useState, useRef } from 'react';
import styles from './ProductGallery.module.css';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState('');
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const containerCenterX = scrollLeft + carouselRef.current.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(carouselRef.current.children).forEach((child, index) => {
      const childEl = child as HTMLElement;
      const childCenterX = childEl.offsetLeft + childEl.clientWidth / 2;
      const distance = Math.abs(containerCenterX - childCenterX);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== currentIndex) {
      setCurrentIndex(closestIndex);
    }
  };

  const scrollToImage = (index: number) => {
    setCurrentIndex(index);
    if (carouselRef.current) {
      const childEl = carouselRef.current.children[index] as HTMLElement;
      if (childEl) {
        const scrollTarget = childEl.offsetLeft - (carouselRef.current.clientWidth - childEl.clientWidth) / 2;
        carouselRef.current.scrollTo({ left: scrollTarget, behavior: 'smooth' });
      }
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className={styles.galleryContainer}>
        <div className={styles.mainImage}>
          <div className={styles.placeholderImg}>DRIP</div>
        </div>
      </div>
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (img: string) => {
    setLightboxImg(img);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className={styles.galleryContainer}>
      {/* Desktop Gallery */}
      <div className={styles.desktopGallery}>
        <div className={styles.mainImage}>
          <img 
            src={images[currentIndex]} 
            alt={`${title} - Imagen ${currentIndex + 1}`} 
            className={styles.image} 
            onClick={() => openLightbox(images[currentIndex])}
            style={{ cursor: 'zoom-in' }}
          />
          
          {images.length > 1 && (
            <>
              <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrev}>
                &#10094;
              </button>
              <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNext}>
                &#10095;
              </button>
              
              <div className={styles.indicators}>
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                    onClick={() => scrollToImage(idx)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Gallery */}
      <div className={styles.mobileGallery}>
        <div 
          className={styles.mobileCarousel}
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {images.map((img, idx) => (
            <div key={idx} className={styles.mobileCarouselItem}>
              <img 
                src={img} 
                alt={`${title} - Imagen ${idx + 1}`} 
                onClick={() => openLightbox(img)}
              />
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <div className={styles.indicators}>
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                onClick={() => scrollToImage(idx)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>&times;</button>
          <img 
            src={lightboxImg} 
            alt="Zoom" 
            className={styles.lightboxContent} 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
}
