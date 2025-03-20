'use client';

export function ScrollToTop() {
    return (
        <div className='flex w-full flex-col items-center gap-[24px] lg:w-fit'>
            <div
                title='Voltar ao topo do site'
                className='gap-xsmall order-last flex flex-col items-center self-center md:self-start xl:order-none'>
                <hr className='mb-4 h-[2px] w-[200px] text-[#F5F7F9] md:hidden' />
                <button
                    className='order-last flex cursor-pointer flex-col items-center gap-[18px] md:flex-row xl:h-[40px]'
                    onClick={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}>
                    <div className='h-medium w-medium bg-primary flex items-center justify-center rounded-full'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='25'
                            height='24'
                            viewBox='0 0 25 24'
                            fill='none'
                            className='w-xsmall text-primary'>
                            <path
                                d='M4.62964 12L6.03964 13.41L11.6296 7.83V20H13.6296V7.83L19.2096 13.42L20.6296 12L12.6296 4L4.62964 12Z'
                                fill='white'
                            />
                        </svg>
                    </div>
                    <span className='base-typography-classes m-0 text-[1rem] leading-[140%] font-[400]'>
                        Voltar ao topo
                    </span>
                </button>
            </div>
        </div>
    );
}
