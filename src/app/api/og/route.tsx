import { NextRequest } from 'next/server';

import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

const poppins = fetch(new URL('../../fonts/Poppins-Medium.ttf', import.meta.url)).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Título Padrão';

    const poppinsData = await poppins;

    try {
        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        backgroundColor: '#fff',
                        padding: '60px'
                    }}>
                    <svg width='139' height='50' viewBox='0 0 139 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
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

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            maxWidth: '90%'
                        }}>
                        <h1
                            style={{
                                fontSize: 72,
                                fontFamily: 'Poppins',
                                color: '#1a1a1a',
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em'
                            }}>
                            {title}
                        </h1>
                    </div>

                    <div
                        style={{
                            width: '100%',
                            height: '8px',
                            backgroundColor: '#2E8896',
                            borderRadius: '4px'
                        }}
                    />
                </div>
            ),
            {
                width: 1200,
                height: 675,
                fonts: [
                    {
                        name: 'Poppins',
                        data: poppinsData,
                        style: 'normal',
                        weight: 700
                    }
                ]
            }
        );
    } catch (error) {
        return new Response('Failed to generate image', { status: 500 });
    }
}
