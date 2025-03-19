'use client';

import { useEffect, useRef, useState } from 'react';

import { NewArticle } from '@/cms/strapi/types';

import { CarouselControls } from './CarouselControls';
import { NewsCard } from './NewsCard';

interface CarouselProps {
    articles: NewArticle[];
}

export const Carousel = ({ articles }: CarouselProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showControls, setShowControls] = useState(false);

    useEffect(() => {
        const checkScrollNeeded = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const contentWidth = container.scrollWidth;
            const containerWidth = container.clientWidth;

            setShowControls(contentWidth > containerWidth);
        };

        checkScrollNeeded();
        window.addEventListener('resize', checkScrollNeeded);

        return () => {
            window.removeEventListener('resize', checkScrollNeeded);
        };
    }, [articles]);

    const scrollToIndex = (index: number) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const cardWidth = 732;
        const gap = 16;
        const scrollPosition = index * (cardWidth + gap);

        container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        setCurrentIndex(index);
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < articles.length - 1) {
            scrollToIndex(currentIndex + 1);
        }
    };

    return (
        <div className='relative'>
            <div
                ref={containerRef}
                className='scroll-snap-type-x mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
                <div className='flex gap-4 transition-transform duration-300' role='list'>
                    {articles.map((article) => (
                        <div key={article.id} role='listitem' className='scroll-snap-center'>
                            <NewsCard article={article} />
                        </div>
                    ))}
                </div>
            </div>
            {showControls && (
                <CarouselControls
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    hasPrevious={currentIndex > 0}
                    hasNext={currentIndex < articles.length - 1}
                />
            )}
        </div>
    );
};
