'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselControlsProps {
    onPrevious: () => void;
    onNext: () => void;
    hasPrevious: boolean;
    hasNext: boolean;
}

export const CarouselControls = ({ onPrevious, onNext, hasPrevious, hasNext }: CarouselControlsProps) => {
    return (
        <nav
            className='absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-between px-2 sm:px-4 md:px-0'
            aria-label='Controles de navegação do carrossel'>
            <button
                onClick={onPrevious}
                disabled={!hasPrevious}
                className={`transition-opacity duration-200 md:-translate-x-1/2 ${!hasPrevious ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
                aria-label='Anterior'>
                <ArrowLeft className='bg-primary hover:bg-primary/80 h-8 w-8 cursor-pointer rounded-full text-white transition-colors sm:h-10 sm:w-10 md:h-12 md:w-12' />
            </button>
            <button
                onClick={onNext}
                disabled={!hasNext}
                className={`transition-opacity duration-200 md:translate-x-1/2 ${!hasNext ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
                aria-label='Próximo'>
                <ArrowRight className='bg-primary hover:bg-primary/80 h-8 w-8 cursor-pointer rounded-full text-white transition-colors sm:h-10 sm:w-10 md:h-12 md:w-12' />
            </button>
        </nav>
    );
};
