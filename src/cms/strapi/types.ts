export interface BannerImage {
    id: number;
    alt: string;
    img: {
        url: string;
    };
}

export interface Author {
    id: number;
    name: string;
    slug: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
}

export interface Tag {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Seo {
    id: number;
    metaTitle: string;
    metaDescription: string;
}

export interface NewArticle {
    id: number;
    title: string;
    description: string;
    content: string;
    publishedAt: string;
    updatedAt: string;
    slug: string;
    author?: Author;
    tags?: Tag[];
    seo?: Seo[];
    category?: Category;
    bannerImage?: BannerImage;
    blocks?: any[];
}

export interface TrendingsResponse {
    data: [
        {
            new_articles: NewArticle[];
        }
    ];
}

export interface MostReadResponse {
    title: string;
    new_articles: NewArticle[];
}

export interface LastNewsResponse {
    data: NewArticle[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
