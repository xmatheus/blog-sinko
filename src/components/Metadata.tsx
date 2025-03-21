import { Metadata } from 'next';
import Script from 'next/script';

import { siteConfig } from '@/config/metadata';

export function OrganizationSchemaMetadata() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.organization.name,
        url: siteConfig.organization.url,
        logo: {
            '@type': 'ImageObject',
            url: `${siteConfig.organization.url}${siteConfig.organization.logo}`
        },
        sameAs: siteConfig.organization.sameAs
    };

    return (
        <Script
            id='organization-schema'
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
    );
}
