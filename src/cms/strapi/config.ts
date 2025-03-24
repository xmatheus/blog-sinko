import { unstable_cache } from 'next/cache';

import { fetchAPI } from '@/utils/fetch-api';
import { getStrapiURL } from '@/utils/get-strapi-url';

import { LastNewsResponse, MostReadResponse, NewArticle, Tag, TrendingsResponse } from './types';
import qs from 'qs';

const BASE_URL = getStrapiURL();

const CACHE_1H = 60 * 60;

const CACHE_5M = 60 * 5;

const trendingsQuery = qs.stringify({
    populate: {
        new_articles: {
            populate: {
                bannerImage: {
                    populate: ['img']
                }
            }
        }
    }
});

const mostReadQuery = (excludeSlug?: string) =>
    qs.stringify({
        populate: {
            new_articles: {
                populate: {
                    bannerImage: {
                        populate: ['img']
                    },
                    tags: true
                },
                ...(excludeSlug && {
                    filters: {
                        slug: {
                            $ne: excludeSlug
                        }
                    }
                })
            }
        }
    });

const lastNewsQuery = qs.stringify({
    populate: {
        bannerImage: {
            populate: ['img']
        },
        category: true,
        author: true
    },
    filters: {
        category: {
            slug: {
                $eq: 'noticias'
            }
        }
    }
});

const trendingsTagQuery = qs.stringify({
    populate: '*',
    pagination: {
        pageSize: 6
    }
});

const pageQuery = () =>
    qs.stringify({
        populate: '*'
    });

const pageBySlugQuery = (slug: string) =>
    qs.stringify({
        filters: {
            slug: {
                $eq: slug
            }
        },
        populate: {
            bannerImage: {
                populate: ['img']
            },
            category: true,
            author: true,
            tags: true,
            blocks: {
                populate: '*'
            }
        }
    });

const relatedArticlesQuery = (slug: string) =>
    qs.stringify({
        filters: {
            slug: {
                $eq: slug
            }
        },
        populate: {
            blocks: {
                on: {
                    'shared.related-article': {
                        populate: {
                            articles: {
                                populate: {
                                    bannerImage: {
                                        populate: ['img']
                                    },
                                    tags: true
                                }
                            }
                        }
                    }
                }
            }
        }
    });

const allSlugsQuery = qs.stringify({
    fields: ['slug'],
    pagination: {
        pageSize: 100
    }
});

export const getTrendings = unstable_cache(
    async (): Promise<NewArticle[]> => {
        const path = '/api/trendings';
        const url = new URL(path, BASE_URL);
        url.search = trendingsQuery;

        try {
            const response: TrendingsResponse = await fetchAPI(url.href, {
                method: 'GET',
                authToken: process.env.STRAPI_TOKEN
            });

            if (!response?.data?.[0]?.new_articles) {
                return [];
            }

            return response.data[0].new_articles;
        } catch (error) {
            console.error('Error fetching trendings:', error);

            return [];
        }
    },
    ['trendings'],
    { revalidate: CACHE_5M }
);

export const getMostRead = unstable_cache(
    async (excludeSlug?: string): Promise<MostReadResponse> => {
        const path = '/api/home-most-reads';
        const url = new URL(path, BASE_URL);
        url.search = mostReadQuery(excludeSlug);

        try {
            const response = await fetchAPI(url.href, {
                method: 'GET',
                authToken: process.env.STRAPI_TOKEN
            });

            if (!response?.data?.[0]) {
                return {
                    title: '',
                    new_articles: []
                };
            }

            return {
                title: response.data[0].title,
                new_articles: response.data[0].new_articles || []
            };
        } catch (error) {
            console.error('Error fetching most read:', error);

            return {
                title: '',
                new_articles: []
            };
        }
    },
    ['most-read'],
    { revalidate: CACHE_1H }
);

export const getLastNews = unstable_cache(
    async (): Promise<LastNewsResponse> => {
        const path = '/api/new-articles';
        const url = new URL(path, BASE_URL);
        url.search = lastNewsQuery;

        try {
            const response = await fetchAPI(url.href, {
                method: 'GET',
                authToken: process.env.STRAPI_TOKEN
            });

            if (!response?.data) {
                return {
                    data: [],
                    meta: {
                        pagination: {
                            page: 1,
                            pageSize: 0,
                            pageCount: 0,
                            total: 0
                        }
                    }
                };
            }

            return response;
        } catch (error) {
            console.error('Error fetching last news:', error);

            return {
                data: [],
                meta: {
                    pagination: {
                        page: 1,
                        pageSize: 0,
                        pageCount: 0,
                        total: 0
                    }
                }
            };
        }
    },
    ['last-news'],
    { revalidate: CACHE_5M }
);

export const getTrendingsTag = unstable_cache(
    async (): Promise<Tag[]> => {
        const path = '/api/home-trending-tags';
        const url = new URL(path, BASE_URL);
        url.search = trendingsTagQuery;

        try {
            const response = await fetchAPI(url.href, {
                method: 'GET',
                authToken: process.env.STRAPI_TOKEN
            });

            if (!response?.data?.[0]?.tags) {
                return [];
            }

            return response.data[0].tags;
        } catch (error) {
            console.error('Error fetching trending tags:', error);

            return [];
        }
    },
    ['trending-tags'],
    { revalidate: CACHE_1H }
);

export const getAllPages = unstable_cache(
    async (): Promise<NewArticle[]> => {
        const path = '/api/new-articles';
        const url = new URL(path, BASE_URL);
        url.search = pageQuery();

        const response = await fetchAPI(url.href, {
            method: 'GET',
            authToken: process.env.STRAPI_TOKEN
        });

        return response.data;
    },
    ['all-pages'],
    { revalidate: CACHE_1H }
);

export const getPageBySlug = unstable_cache(
    async (slug: string) => {
        const path = '/api/new-articles';
        const url = new URL(path, BASE_URL);
        url.search = pageBySlugQuery(slug);

        return await fetchAPI(url.href, {
            method: 'GET',
            authToken: process.env.STRAPI_TOKEN
        });
    },
    ['page-by-slug'],
    { revalidate: CACHE_1H }
);

export const getRelatedArticles = unstable_cache(
    async (slug: string) => {
        const path = '/api/new-articles';
        const url = new URL(path, BASE_URL);
        url.search = relatedArticlesQuery(slug);

        return await fetchAPI(url.href, {
            method: 'GET',
            authToken: process.env.STRAPI_TOKEN
        });
    },
    ['related-articles'],
    { revalidate: CACHE_1H }
);

export const getAllArticleSlugs = unstable_cache(
    async () => {
        const path = '/api/new-articles';
        const url = new URL(path, BASE_URL);
        url.search = allSlugsQuery;

        try {
            const response = await fetchAPI(url.href, {
                method: 'GET',
                authToken: process.env.STRAPI_TOKEN
            });

            if (!response?.data) {
                return [];
            }

            return response.data.map((article: { slug: string }) => article.slug);
        } catch (error) {
            console.error('Error fetching all article slugs:', error);

            return [];
        }
    },
    ['all-article-slugs'],
    { revalidate: CACHE_1H }
);
