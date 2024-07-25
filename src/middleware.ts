import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { COLORS } from './app/(home)/constants';

export function middleware(request: NextRequest) {
  const COLOR_LENGTH = COLORS.length;
  const { cookies } = request;

  // Try to retrieve the previous item from the cookies
  let prevItem = cookies.has('prevItem')
    ? parseInt(cookies.get('prevItem')?.value as string, 10)
    : null;
  let item;

  if (prevItem !== null) {
    prevItem += 1;
    item = prevItem % COLOR_LENGTH;
  } else {
    // If there's no previous item, choose a random one
    item = Math.floor(Math.random() * COLOR_LENGTH);
  }

  // Prepare cookies to set
  const response = NextResponse.next();
  response.cookies.set('prevItem', item.toString(), { path: '/' });

  return response;
}

// Middleware only runs on home page
export const config = {
  matcher: '/'
};
