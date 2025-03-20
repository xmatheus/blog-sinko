import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith('/_next') || // exclude Next.js internals
        pathname.startsWith('/api') || //  exclude all API routes
        pathname.startsWith('/static') || // exclude static files
        PUBLIC_FILE.test(pathname) // exclude all files in the public folder
    ) {
        return NextResponse.next();
    }

    const requestHeaders = new Headers(request.headers);

    console.log({ server: pathname });
    requestHeaders.set('x-pathname', pathname);
    requestHeaders.set('x-url', request.url);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders
        }
    });

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        '/((?!_next/static|_next/image|favicon.ico).*)'
    ]
};
