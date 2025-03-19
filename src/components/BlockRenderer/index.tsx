import type { Block } from './types';

function blockRenderer(block: Block, index: number) {
    switch (block.__component) {
        case 'blocks.hero-section':
            return <h1>Hero Section</h1>;
        default:
            return null;
    }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
    return blocks.map((block, index) => blockRenderer(block, index));
}
