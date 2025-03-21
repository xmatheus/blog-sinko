import Image from 'next/image';
import Link from 'next/link';

import { Grid } from './Grid';
import { ScrollToTop } from './ScrollToTop';
import ThemeToggle from './ThemeSwitch';

export function Footer() {
    return (
        <footer className='flex justify-center pb-11'>
            <Grid className='flex w-full flex-col justify-between gap-12 lg:flex-row lg:gap-0'>
                <div className='flex w-full flex-col items-center justify-between gap-[54px] lg:items-start xl:max-w-[330px]'>
                    <div className='flex items-center justify-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='102'
                            height='50'
                            viewBox='0 0 102 50'
                            fill='none'>
                            <g clipPath='url(#clip0_1216_1629)'>
                                <path d='M27.3806 17.4756L23 20.4481V36.0931H27.3806V17.4756Z' fill='#2E8896' />
                                <path
                                    d='M18.7127 19.0895H14.0192C14.0192 19.0895 14.3321 16.2734 9.16924 16.2734C4.0064 16.2734 4.3193 18.7766 4.3193 18.7766C4.3193 18.7766 3.22415 21.5927 11.516 22.062C19.8078 22.5314 19.8078 29.8845 19.8078 29.8845C19.8078 29.8845 19.0256 37.0812 9.16924 36.4554C-0.6871 35.8296 -1 29.1023 -1 29.1023H4.00639C5.22601 31.2117 6.36758 31.8599 9.16924 32.0748C9.16924 32.0748 14.4453 32.2466 14.9579 29.8845C15.5293 27.2513 13.5498 26.1297 9.16924 26.1297C4.78865 26.1297 -0.217751 23.6718 -0.217751 19.0895C-0.217751 14.5072 4.16284 11.5799 10.8902 12.0492C17.6175 12.5186 18.7127 19.0895 18.7127 19.0895Z'
                                    fill='#2E8896'
                                />
                                <path
                                    d='M36.6322 12H31V36.0933H36.0064V19.666L46.645 36.0933H51.3385V12H46.645V27.645L36.6322 12Z'
                                    fill='#2E8896'
                                />
                                <path
                                    d='M59.8499 12.0492H55V36.1425H60.0064L59.8499 25.6604L69.0805 36.1425H75.6514L64.387 23.9394L75.6514 12.0492H69.5498L59.8499 22.5314V12.0492Z'
                                    fill='#2E8896'
                                />
                                <path
                                    d='M101.345 24.6724C101.345 31.6712 95.6712 37.3449 88.6724 37.3449C81.6736 37.3449 76 31.6712 76 24.6724C76 17.6736 81.6736 12 88.6724 12C95.6712 12 101.345 17.6736 101.345 24.6724ZM80.3109 24.6724C80.3109 29.2904 84.0545 33.034 88.6724 33.034C93.2904 33.034 97.034 29.2904 97.034 24.6724C97.034 20.0545 93.2904 16.3109 88.6724 16.3109C84.0545 16.3109 80.3109 20.0545 80.3109 24.6724Z'
                                    fill='#2E8896'
                                />
                                <path d='M23.0005 17.9451V12H27.3811V15.2854L23.0005 17.9451Z' fill='#2E8896' />
                            </g>
                            <defs>
                                <clipPath id='clip0_1216_1629'>
                                    <rect width='139' height='49.3226' fill='white' transform='translate(0 0.338709)' />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <small className='base-typography-classes m-0 text-center text-[1rem] leading-[1.75rem] font-[400] lg:text-left xl:text-[1.125rem]'>
                        © 2025 Sinko.
                        <br />
                        Todos os direitos reservados.
                    </small>

                    <div className='flex flex-wrap items-center justify-center gap-4 lg:justify-start lg:gap-[11px]'>
                        <a
                            title='WhatsApp da Sinko'
                            rel='nofollow noreferrer'
                            target='_blank'
                            aria-label='Entre em contato pelo WhatsApp'
                            href='https://api.whatsapp.com/send?phone=5511950749507'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='30'
                                height='30'
                                viewBox='0 0 37 36'
                                fill='none'
                                className='w-[30px]'>
                                <g clipPath='url(#clip0_8675_460)'>
                                    <path
                                        d='M18.6621 35.8992C15.1622 35.8997 11.7393 34.8724 8.81822 32.9446L1.94015 35.1418L4.16982 28.4964C1.94986 25.4513 0.756389 21.7788 0.762105 18.0104C0.762105 8.14526 8.7869 0.121582 18.6509 0.121582C28.5149 0.121582 36.5397 8.14526 36.5397 18.0104C36.5397 27.8755 28.5183 35.8992 18.6509 35.8992H18.6621Z'
                                        fill='white'
                                    />
                                    <path
                                        d='M18.6623 0.120605C8.79718 0.120605 0.772949 8.14513 0.772949 18.0099C0.772949 21.922 2.03503 25.5507 4.18044 28.4957L1.95043 35.143L8.82568 32.945C11.6544 34.8171 15.0307 35.9002 18.6697 35.9002C28.5348 35.9002 36.5591 27.8754 36.5591 18.0108C36.5591 8.14632 28.5345 0.121495 18.6697 0.121495H18.6593L18.6623 0.120605Z'
                                        fill='#2E8896'
                                    />
                                    <path
                                        d='M13.667 9.20741C13.3313 8.37618 13.0573 8.34598 12.5314 8.31241L11.9318 8.29004C11.2494 8.29004 10.5334 8.49141 10.1015 8.93108C9.5757 9.46808 8.27124 10.7188 8.27124 13.2853C8.27124 15.8517 10.1429 18.3331 10.3969 18.681C10.6598 19.0166 14.0462 24.371 19.3055 26.548C23.418 28.2519 24.6374 28.0942 25.5738 27.8939C26.9409 27.5997 28.6549 26.5894 29.0867 25.37C29.5185 24.1506 29.5185 23.1101 29.391 22.8864C29.2635 22.6626 28.9178 22.5507 28.392 22.2767C27.8661 22.0026 25.3109 20.7518 24.8265 20.5829C24.3533 20.4039 23.9013 20.4676 23.5433 20.9722C23.0399 21.677 22.5443 22.393 22.1449 22.8226C21.8294 23.1582 21.3136 23.203 20.8829 23.024C20.3045 22.7823 18.6846 22.214 16.6876 20.4363C15.1415 19.0602 14.0899 17.3441 13.7844 16.8295C13.479 16.3036 13.7531 15.9982 13.9948 15.7141C14.2577 15.3874 14.5094 15.1569 14.7734 14.8526C15.0374 14.5483 15.184 14.3895 15.3518 14.0326C15.5308 13.697 15.4044 13.3278 15.278 13.0649C15.1516 12.802 14.0999 10.2344 13.6692 9.19399L13.667 9.20741Z'
                                        fill='white'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_8675_460'>
                                        <rect
                                            width='35.8'
                                            height='35.8'
                                            fill='white'
                                            transform='translate(0.762207 0.110352)'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a
                            title='Instagram da Sinko'
                            rel='nofollow noreferrer'
                            target='_blank'
                            aria-label='Acesse nosso Instagram'
                            href='https://www.instagram.com/Sinko.app/'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='30'
                                height='30'
                                viewBox='0 0 40 40'
                                fill='none'
                                className='w-[30px]'>
                                <path
                                    d='M28.738 2.07324H11.7967C6.58388 2.07324 2.35803 6.29689 2.35803 11.507V28.4395C2.35803 33.6496 6.58388 37.8732 11.7967 37.8732H28.738C33.9508 37.8732 38.1767 33.6496 38.1767 28.4395V11.507C38.1767 6.29689 33.9508 2.07324 28.738 2.07324Z'
                                    fill='#2E8896'
                                    stroke='#2E8896'
                                    strokeWidth='3.35625'
                                />
                                <path
                                    d='M20.2673 28.319C24.8787 28.319 28.617 24.5827 28.617 19.9737C28.617 15.3647 24.8787 11.6284 20.2673 11.6284C15.656 11.6284 11.9177 15.3647 11.9177 19.9737C11.9177 24.5827 15.656 28.319 20.2673 28.319Z'
                                    stroke='white'
                                    strokeWidth='3.35625'
                                />
                                <path
                                    d='M31.4163 9.45178C31.4163 9.79329 31.1391 10.0716 30.7953 10.0716C30.4514 10.0716 30.1742 9.79329 30.1742 9.45178C30.1742 9.11027 30.4514 8.83193 30.7953 8.83193C31.1391 8.83193 31.4163 9.11027 31.4163 9.45178Z'
                                    fill='white'
                                    stroke='white'
                                    strokeWidth='3.35625'
                                />
                            </svg>
                        </a>
                        <a
                            title='Facebook da Sinko'
                            rel='nofollow noreferrer'
                            target='_blank'
                            aria-label='Acesse nosso Facebook'
                            href='https://www.facebook.com/aplicativoSinko'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='30'
                                height='30'
                                viewBox='0 0 36 36'
                                fill='none'
                                className='w-[30px]'>
                                <path
                                    d='M31.1154 0.0732422H4.95042C2.28479 0.0732422 0.123779 2.23304 0.123779 4.89736V31.0489C0.123779 33.7133 2.2847 35.8731 4.95042 35.8731H17.8549L17.8769 23.0801H14.5516C14.1194 23.0801 13.7687 22.7309 13.767 22.299L13.751 18.1753C13.7494 17.741 14.1012 17.3881 14.5357 17.3881H17.855V13.4035C17.855 8.77952 20.6805 6.26171 24.8076 6.26171H28.1941C28.6274 6.26171 28.9788 6.6128 28.9788 7.04595V10.5231C28.9788 10.956 28.6277 11.307 28.1946 11.3073L26.1163 11.3083C23.8719 11.3083 23.4373 12.3742 23.4373 13.9386V17.3881H28.369C28.839 17.3881 29.2035 17.7983 29.1482 18.2647L28.6592 22.3884C28.6124 22.783 28.2776 23.0803 27.88 23.0803H23.4592L23.4373 35.8732H31.1156C33.7812 35.8732 35.9422 33.7134 35.9422 31.0492V4.89736C35.9421 2.23304 33.7812 0.0732422 31.1154 0.0732422Z'
                                    fill='#2E8896'
                                />
                            </svg>
                        </a>
                        <a
                            title='X da Sinko'
                            rel='nofollow noreferrer'
                            target='_blank'
                            aria-label='Acesse nosso X'
                            href='https://X.com/SinkoApp/'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0,0,256,256' width='30px' height='30px'>
                                <g
                                    fill='#2E8896'
                                    fillRule='nonzero'
                                    stroke='none'
                                    strokeWidth='1'
                                    strokeLinecap='butt'
                                    strokeLinejoin='miter'
                                    strokeMiterlimit='10'
                                    strokeDasharray=''
                                    strokeDashoffset='0'
                                    fontFamily='none'
                                    fontWeight='none'
                                    fontSize='none'
                                    textAnchor='none'
                                    style={{ mixBlendMode: 'normal' }}>
                                    <g transform='scale(5.12,5.12)'>
                                        <path d='M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z' />
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a
                            title='LinkedIn da Sinko'
                            rel='nofollow noreferrer'
                            target='_blank'
                            aria-label='Acesse nosso Linkedin'
                            href='https://www.linkedin.com/company/Sinko-app/'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='30'
                                height='30'
                                viewBox='0 0 37 36'
                                fill='none'
                                className='w-[30px]'>
                                <g clipPath='url(#clip0_8675_446)'>
                                    <path
                                        d='M33.0865 0.0732422H3.7633C1.9748 0.0732422 0.524902 1.52314 0.524902 3.31164V32.6347C0.524902 34.4233 1.9748 35.8732 3.7633 35.8732H33.0864C34.875 35.8732 36.3249 34.4233 36.3249 32.6347V3.31164C36.3249 1.52314 34.875 0.0732422 33.0865 0.0732422ZM11.6029 30.9853C11.6029 31.5058 11.181 31.9277 10.6605 31.9277H6.64886C6.12835 31.9277 5.70644 31.5058 5.70644 30.9853V14.1686C5.70644 13.6481 6.12835 13.2262 6.64886 13.2262H10.6605C11.181 13.2262 11.6029 13.6481 11.6029 14.1686V30.9853ZM8.65469 11.641C6.54989 11.641 4.84358 9.93464 4.84358 7.82985C4.84358 5.72505 6.54989 4.01874 8.65469 4.01874C10.7595 4.01874 12.4658 5.72505 12.4658 7.82985C12.4658 9.93464 10.7596 11.641 8.65469 11.641ZM32.5678 31.0612C32.5678 31.5398 32.1798 31.9277 31.7013 31.9277H27.3965C26.9179 31.9277 26.5299 31.5398 26.5299 31.0612V23.1732C26.5299 21.9965 26.8751 18.0168 23.4548 18.0168C20.8018 18.0168 20.2636 20.7408 20.1556 21.9633V31.0612C20.1556 31.5398 19.7677 31.9277 19.2891 31.9277H15.1256C14.6471 31.9277 14.2591 31.5398 14.2591 31.0612V14.0927C14.2591 13.6142 14.6471 13.2262 15.1256 13.2262H19.2891C19.7676 13.2262 20.1556 13.6142 20.1556 14.0927V15.5598C21.1393 14.0835 22.6013 12.944 25.7141 12.944C32.6072 12.944 32.5678 19.3839 32.5678 22.9223V31.0612Z'
                                        fill='#2E8896'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_8675_446'>
                                        <rect
                                            width='35.8'
                                            height='35.8'
                                            fill='white'
                                            transform='translate(0.524902 0.0732422)'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a
                            title='YouTube da Sinko'
                            rel='nofollow noreferrer'
                            target='_blank'
                            aria-label='Acesse nosso YouTube'
                            href='https://www.youtube.com/@Sinkoapp'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='30'
                                height='30'
                                viewBox='0 0 43 44'
                                fill='none'
                                className='w-[30px]'>
                                <g clipPath='url(#clip0_9507_266)'>
                                    <path
                                        d='M21.6396 5.49512H21.8788C24.0876 5.50318 35.2796 5.58379 38.2973 6.39531C39.2095 6.64298 40.0408 7.12574 40.7081 7.79534C41.3753 8.46494 41.8551 9.29793 42.0996 10.2111C42.371 11.2322 42.5618 12.5838 42.6908 13.9785L42.7176 14.2579L42.7768 14.9566L42.7983 15.236C42.9729 17.6921 42.9944 19.9923 42.9971 20.4948V20.6963C42.9944 21.2176 42.9702 23.6737 42.7768 26.2319L42.7553 26.514L42.7311 26.7935C42.5967 28.3305 42.3979 29.8568 42.0996 30.9801C41.8551 31.8932 41.3753 32.7262 40.7081 33.3958C40.0408 34.0654 39.2095 34.5481 38.2973 34.7958C35.1802 35.6342 23.3325 35.6933 21.6907 35.696H21.3091C20.4788 35.696 17.0446 35.6799 13.4438 35.5563L12.987 35.5402L12.7532 35.5294L12.2937 35.5106L11.8342 35.4918C8.85147 35.3601 6.01115 35.1478 4.70251 34.7931C3.79056 34.5457 2.95949 34.0633 2.29227 33.3942C1.62506 32.7251 1.14505 31.8927 0.900192 30.9801C0.601919 29.8595 0.403069 28.3305 0.268712 26.7935L0.247215 26.5113L0.225717 26.2319C0.0923365 24.4111 0.018848 22.5864 0.00537109 20.7608L0.00537109 20.4303C0.0107454 19.8526 0.0322426 17.856 0.177349 15.6525L0.196159 15.3758L0.20422 15.236L0.225717 14.9566L0.284835 14.2579L0.311706 13.9785C0.44069 12.5838 0.631477 11.2295 0.902879 10.2111C1.14733 9.29793 1.62715 8.46494 2.29439 7.79534C2.96164 7.12574 3.79293 6.64298 4.7052 6.39531C6.01384 6.04598 8.85416 5.83101 11.8369 5.69665L12.2937 5.67784L12.7559 5.66172L12.987 5.65366L13.4465 5.63485C16.0039 5.55263 18.5623 5.50695 21.121 5.4978L21.6396 5.49512ZM17.2031 14.1209V27.0676L28.3736 20.5969L17.2031 14.1209Z'
                                        fill='#2E8896'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_9507_266'>
                                        <rect
                                            width='42.9944'
                                            height='42.9944'
                                            fill='white'
                                            transform='translate(0.00561523 0.123535)'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-[70px]'>
                    <div className='flex flex-col gap-6'>
                        <p className='base-typography-classes m-0 text-center text-[1rem] leading-[145%] font-[600] tracking-[0.15px] lg:text-left xl:text-[1.5rem]'>
                            Explore
                        </p>
                        <ul className='flex list-none flex-col items-center gap-6 lg:items-start'>
                            <li>
                                <Link title='Página inicial do site Sinko' href='/'>
                                    <p className='base-typography-classes text-primary m-0 text-[1rem] leading-[140%] font-[400] underline'>
                                        Home
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link title='Noticias' href='/noticias'>
                                    <p className='base-typography-classes text-primary m-0 text-[1rem] leading-[140%] font-[400] underline'>
                                        Noticias
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link title='Nossos produtos' href='/servicos/portabilidade-de-consignado-com-troco'>
                                    <p className='base-typography-classes text-primary m-0 text-[1rem] leading-[140%] font-[400] underline'>
                                        Nossos produtos
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <p className='base-typography-classes m-0 text-center text-[1rem] leading-[145%] font-[600] tracking-[0.15px] lg:text-left xl:text-[1.5rem]'>
                            SINKO
                        </p>
                        <ul className='flex list-none flex-col items-center gap-6 lg:items-start'>
                            <li>
                                <Link title='Sobre nós' href='/sobre-nos'>
                                    <p className='base-typography-classes text-primary m-0 text-[1rem] leading-[140%] font-[400] underline'>
                                        Sobre nós
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link title='Termos de uso' href='/termo-de-uso'>
                                    <p className='base-typography-classes text-primary m-0 text-[1rem] leading-[140%] font-[400] underline'>
                                        Termos de uso
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link title='Política de privacidade' href='/politica-de-privacidade'>
                                    <p className='base-typography-classes text-primary m-0 text-[1rem] leading-[140%] font-[400] underline'>
                                        Política de privacidade
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link title='Contato' href='/contato'>
                                    <p className='base-typography-classes text-primary m-0 text-[1rem] leading-[140%] font-[400] underline'>
                                        Contato
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link title='Nossa equipe' href='/equipe'>
                                    <p className='base-typography-classes text-primary m-0 text-[1rem] leading-[140%] font-[400] underline'>
                                        Nossa equipe
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-between gap-4'>
                    <ScrollToTop />
                    <ThemeToggle />
                </div>
            </Grid>
        </footer>
    );
}
