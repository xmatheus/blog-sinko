export interface BannerImage {
    id: number;
    alt: string;
    img: {
        url: string;
    };
}

export interface Author {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Category {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    description: null | string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
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
    documentId: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    category?: Category;
    tags?: Tag[];
    seo?: Seo[];
    blocks?: any[];
    bannerImage: BannerImage;
    author?: Author;
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
