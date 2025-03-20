import { fetchAPI } from '@/utils/fetch-api';
import { getStrapiURL } from '@/utils/get-strapi-url';

import { LastNewsResponse, MostReadResponse, NewArticle, Tag, TrendingsResponse } from './types';
import qs from 'qs';

const BASE_URL = getStrapiURL();

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

const mostReadQuery = qs.stringify({
    populate: {
        new_articles: {
            populate: {
                bannerImage: {
                    populate: ['img']
                },
                tags: true
            }
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

const blogPopulate = {
    blocks: {
        on: {
            'blocks.hero-section': {
                populate: {
                    image: {
                        fields: ['url', 'alternativeText']
                    },
                    logo: {
                        populate: {
                            image: {
                                fields: ['url', 'alternativeText']
                            }
                        }
                    },
                    cta: true
                }
            },
            'blocks.info-block': {
                populate: {
                    image: {
                        fields: ['url', 'alternativeText']
                    },
                    cta: true
                }
            },
            'blocks.featured-article': {
                populate: {
                    image: {
                        fields: ['url', 'alternativeText']
                    },
                    link: true
                }
            },
            'blocks.subscribe': {
                populate: true
            },
            'blocks.heading': {
                populate: true
            },
            'blocks.paragraph-with-image': {
                populate: {
                    image: {
                        fields: ['url', 'alternativeText']
                    }
                }
            },
            'blocks.paragraph': {
                populate: true
            },
            'blocks.full-image': {
                populate: {
                    image: {
                        fields: ['url', 'alternativeText']
                    }
                }
            }
        }
    }
};

export async function getTrendings(): Promise<NewArticle[]> {
    const path = '/api/trendings';
    const url = new URL(path, BASE_URL);
    url.search = trendingsQuery;

    const response: TrendingsResponse = await fetchAPI(url.href, {
        method: 'GET',
        authToken: process.env.STRAPI_TOKEN
    });

    return response.data[0].new_articles;
}

export async function getMostRead(): Promise<MostReadResponse> {
    const path = '/api/home-most-reads';
    const url = new URL(path, BASE_URL);
    url.search = mostReadQuery;

    const response = await fetchAPI(url.href, { method: 'GET', authToken: process.env.STRAPI_TOKEN });

    return {
        title: response.data[0].title,
        new_articles: response.data[0].new_articles
    };
}

export async function getLastNews(): Promise<LastNewsResponse> {
    const path = '/api/new-articles';
    const url = new URL(path, BASE_URL);
    url.search = lastNewsQuery;

    const response = await fetchAPI(url.href, { method: 'GET', authToken: process.env.STRAPI_TOKEN });

    return response;
}

export async function getTrendingsTag(): Promise<Tag[]> {
    const path = '/api/home-trending-tags';
    const url = new URL(path, BASE_URL);
    url.search = trendingsTagQuery;

    const response = await fetchAPI(url.href, {
        method: 'GET',
        authToken: process.env.STRAPI_TOKEN
    });

    return response.data[0].tags;
}

export async function getPageBySlug(slug: string) {
    const path = '/api/new-articles';
    const url = new URL(path, BASE_URL);
    url.search = pageBySlugQuery(slug);

    return await fetchAPI(url.href, { method: 'GET', authToken: process.env.STRAPI_TOKEN });
}

export async function getRelatedArticles(slug: string) {
    const path = '/api/new-articles';
    const url = new URL(path, BASE_URL);
    url.search = relatedArticlesQuery(slug);

    return await fetchAPI(url.href, { method: 'GET', authToken: process.env.STRAPI_TOKEN });
}

export async function getContentBySlug(slug: string, path: string) {
    const url = new URL(path, BASE_URL);
    url.search = qs.stringify({
        filters: {
            slug: {
                $eq: slug
            }
        },
        populate: {
            image: {
                fields: ['url', 'alternativeText']
            },
            ...blogPopulate
        }
    });

    return fetchAPI(url.href, { method: 'GET', authToken: process.env.STRAPI_TOKEN });
}
