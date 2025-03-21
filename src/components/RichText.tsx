import Link from 'next/link';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface RichTextProps {
    content: string;
    id: number;
}

function generateId(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

export function RichText({ content, id }: RichTextProps) {
    return (
        <div key={id}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ children }) => {
                        const text = children?.toString() || '';

                        return (
                            <h1 id={generateId(text)} className='my-8'>
                                {children}
                            </h1>
                        );
                    },
                    h2: ({ children }) => {
                        const text = children?.toString() || '';

                        return (
                            <h2 id={generateId(text)} className='my-8 text-[32px]'>
                                {children}
                            </h2>
                        );
                    },
                    h3: ({ children }) => {
                        const text = children?.toString() || '';

                        return (
                            <h3 id={generateId(text)} className='my-8 text-2xl'>
                                {children}
                            </h3>
                        );
                    },
                    h4: ({ children }) => {
                        const text = children?.toString() || '';

                        return (
                            <h4 id={generateId(text)} className='my-6 text-xl'>
                                {children}
                            </h4>
                        );
                    },
                    p: ({ children }) => <p className='text-secondary mb-4 text-base leading-relaxed'>{children}</p>,
                    a: ({ href, children }) => (
                        <Link
                            href={href || '#'}
                            className='text-primary hover:underline'
                            target={href?.startsWith('http') ? '_blank' : undefined}
                            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
                            {children}
                        </Link>
                    ),
                    ul: ({ children }) => <ul className='mb-4 ml-6 list-disc space-y-2'>{children}</ul>,
                    ol: ({ children }) => <ol className='mb-4 ml-6 list-decimal space-y-2'>{children}</ol>,
                    li: ({ children }) => <li className='text-secondary text-base leading-relaxed'>{children}</li>,
                    blockquote: ({ children }) => (
                        <blockquote className='border-primary text-secondary border-l-4 pt-4 pb-1 pl-4 italic'>
                            {children}
                        </blockquote>
                    ),
                    code: ({ children }) => (
                        <code className='rounded bg-gray-100 px-1 py-0.5 font-mono text-sm'>{children}</code>
                    ),
                    pre: ({ children }) => (
                        <pre className='mb-4 overflow-x-auto rounded-lg bg-gray-100 p-4'>{children}</pre>
                    ),
                    table: ({ children }) => (
                        <div className='mb-4 overflow-x-auto'>
                            <table className='text-foreground min-w-full border-collapse border-none border-[#E8E8E8] text-sm'>
                                {children}
                            </table>
                        </div>
                    ),
                    th: ({ children }) => (
                        <th className='bg-primary text-primary-foreground first:border-l-primary last:border-r-primary border-none px-4 py-2 text-left font-semibold first:rounded-tl-[8px] last:rounded-tr-[8px]'>
                            {children}
                        </th>
                    ),
                    td: ({ children }) => <td className='border border-[#E8E8E8] px-4 py-2'>{children}</td>,
                    hr: () => <hr className='my-8 border-t border-gray-200' />,
                    img: ({ src, alt }) => <img src={src} alt={alt} className='mb-4 max-w-full rounded-lg' />
                }}>
                {content}
            </ReactMarkdown>
        </div>
    );
}
