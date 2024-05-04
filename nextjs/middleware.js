// middleware.ts

import { NextResponse } from 'next/server'

export function middleware (request) {
    console.log(NextResponse, "NextResponse");
    return NextResponse.rewrite(new URL('/about-2', request.url))
}

// supports both a single string value or an array of matchers 

export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*'],
}

// redirect()- NextResponse Yönlendirme kümesiyle a döndürür.

// rewrite()- NextResponse Yeniden yazma kümesiyle a döndürür.

// next()- NextResponse Ara yazılım zincirini devam ettirecek bir a döndürür.