import { getStrapiURL } from './get-strapi-url';

export function getStrapiImageUrl(path: string): string {
    if (!path) return '';

    if (path.startsWith('http')) return path;

    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    return `${getStrapiURL()}/${cleanPath}`;
}
