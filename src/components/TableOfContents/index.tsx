import { Block } from '../BlockRenderer/types';

interface Heading {
    level: number;
    text: string;
    id: string;
    children?: Heading[];
}

interface TableOfContentsProps {
    content: Block[];
}

function generateId(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

function buildHeadingHierarchy(headings: Heading[]): Heading[] {
    const result: Heading[] = [];
    const stack: Heading[] = [];

    headings.forEach((heading) => {
        while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
            stack.pop();
        }

        if (stack.length === 0) {
            result.push(heading);
        } else {
            const parent = stack[stack.length - 1];
            parent.children = parent.children || [];
            parent.children.push(heading);
        }

        stack.push(heading);
    });

    return result;
}

function extractHeadings(blocks: Block[]): Heading[] {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: Heading[] = [];

    blocks.forEach((block) => {
        if (block.__component === 'shared.rich-text' && block.body) {
            let match;
            while ((match = headingRegex.exec(block.body)) !== null) {
                const level = match[1].length;
                const text = match[2];
                const id = generateId(text);
                headings.push({ level, text, id });
            }
        }
    });

    return buildHeadingHierarchy(headings);
}

function HeadingLink({ heading, parentNumber = '' }: { heading: Heading; parentNumber?: string }) {
    const currentNumber = parentNumber ? `${parentNumber}. ` : '';

    return (
        <li className='list-none'>
            <a
                title={heading.text}
                className='focus:ring-primary text-primary transition-colors duration-200 hover:underline focus:ring-2 focus:ring-offset-2 focus:outline-none'
                href={`#${heading.id}`}>
                {currentNumber}
                {heading.text}
            </a>
            {heading.children && heading.children.length > 0 && (
                <ol className='mt-2 space-y-2' style={{ marginLeft: `${heading.level * 8}px` }}>
                    {heading.children.map((child, index) => (
                        <HeadingLink key={child.id} heading={child} parentNumber={`${currentNumber}${index + 1}`} />
                    ))}
                </ol>
            )}
        </li>
    );
}

export function TableOfContents({ content }: TableOfContentsProps) {
    const headings = extractHeadings(content);

    if (headings.length === 0) return null;

    return (
        <nav
            className='rounded-[8px] border border-[#E0E0E0]'
            style={{ boxShadow: '0px 6px 8px 0px rgba(189, 189, 189, 0.14)' }}
            aria-label='Índice do artigo'>
            <div className='border-b border-[#E0E0E0] px-[18px] py-[12px]'>
                <h2 className='m-0 text-[1rem] leading-[140%] font-[500]'>O que você vai ler neste artigo:</h2>
            </div>
            <div className='p-4'>
                <ol className='flex flex-col space-y-4'>
                    {headings.map((heading, index) => (
                        <HeadingLink key={heading.id} heading={heading} parentNumber={(index + 1).toString()} />
                    ))}
                </ol>
            </div>
        </nav>
    );
}
