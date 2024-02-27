import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  if (req.nextUrl.pathname?.includes('dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
  } else if (req.nextUrl.pathname?.includes('login')) {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
    }
  }
  return NextResponse.next();
}
