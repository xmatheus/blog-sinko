import Image from 'next/image';
import Link from 'next/link';

import { getMostRead } from '@/cms/strapi/config';
import { NewArticle } from '@/cms/strapi/types';
import { getStrapiImageUrl } from '@/utils/get-strapi-image-url';

import { TrendingTags } from '../TrendingTags';

interface SidebarContentProps {
    title: string;
    url: string;
    slug: string;
}

export async function SidebarContent({ title, url, slug }: SidebarContentProps) {
    const mostReadArticles = await getMostRead(slug);

    const shareLinks = {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    return (
        <aside className='scroll-none overflow-y-none sticky top-4 flex h-full max-w-[433px] flex-col gap-8'>
            <section className='rounded-lg'>
                <h2 className='mb-6 text-2xl'>Mais lidas</h2>
                <div className='flex flex-col gap-6'>
                    {mostReadArticles.new_articles.slice(0, 3).map((article) => (
                        <Link key={article.id} href={`/postagens/${article.slug}`} className='group flex gap-4'>
                            {article.bannerImage && (
                                <figure className='relative flex h-[150px] w-[150px] flex-shrink-0 overflow-hidden rounded-lg'>
                                    <Image
                                        src={getStrapiImageUrl(article.bannerImage.img.url)}
                                        alt={article.bannerImage.alt}
                                        fill
                                        className='object-cover transition-transform duration-300 group-hover:scale-110'
                                    />
                                </figure>
                            )}
                            <div className='flex flex-grow flex-col justify-between' id='article-title'>
                                <h3 className='group-hover:text-primary text-lg font-bold'>{article.title}</h3>
                                <time className='mt-1 text-xs text-gray-500'>
                                    {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
                                </time>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className=''>
                <TrendingTags className='my-0 pl-0' align='left' />
            </section>

            <section className=''>
                <h2 className='mb-6 text-2xl'>Gostou do conteúdo? Compartilhe</h2>
                <div className='flex flex-wrap gap-4'>
                    <a
                        href={shareLinks.whatsapp}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-primary text-[#BDBDBD] transition-colors'
                        title='Compartilhar no WhatsApp'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='currentColor'
                            viewBox='0 0 16 16'>
                            <path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z'></path>
                        </svg>
                    </a>
                    <a
                        href={shareLinks.facebook}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-primary text-[#BDBDBD] transition-colors'
                        title='Compartilhar no Facebook'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='currentColor'
                            viewBox='0 0 16 16'>
                            <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'></path>
                        </svg>
                    </a>
                    <a
                        href={shareLinks.twitter}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-primary text-[#BDBDBD] transition-colors'
                        title='Compartilhar no X (Twitter)'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='currentColor'
                            viewBox='0 0 16 16'>
                            <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z'></path>
                        </svg>
                    </a>
                    <a
                        href={shareLinks.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-primary text-[#BDBDBD] transition-colors'
                        title='Compartilhar no LinkedIn'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='currentColor'
                            viewBox='0 0 16 16'>
                            <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'></path>
                        </svg>
                    </a>
                </div>
            </section>
        </aside>
    );
}
