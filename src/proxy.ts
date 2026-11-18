import { NextRequest, NextResponse } from 'next/server';
import { isApprovedProductionHost } from './lib/publication';

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  if (!isApprovedProductionHost(request.nextUrl.host)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
