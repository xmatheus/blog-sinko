import { NewArticle } from '@/cms/strapi/types';

export interface LinkProps {
    id: number;
    text: string;
    href: string;
    isExternal: boolean;
}

export interface ImageProps {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string;
}

export interface LogoProps {
    logoText: string;
    image: ImageProps;
}

type ComponentType = 'shared.rich-text' | 'shared.banner' | 'shared.related-article';

interface Base<T extends ComponentType, D extends object = Record<string, unknown>> {
    id: number;
    __component?: T;
    documentId?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    data?: D;
}

export type Block = RichTextProps | BannerProps | RelatedArticlesProps;

export interface RichTextProps extends Base<'shared.rich-text'> {
    body: string;
}

export interface BannerProps extends Base<'shared.banner'> {
    img: {
        url: string;
        alt: string;
    };
}

export interface RelatedArticlesProps extends Base<'shared.related-article'> {
    articles: NewArticle[];
}
