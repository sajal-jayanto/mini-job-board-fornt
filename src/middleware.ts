import { NextResponse, type NextRequest } from 'next/server'

const privatePaths = ["/admin"];
const publicPath = ['/login'];

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const cookie = request.cookies.get('token');
  if (!cookie && privatePaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
  if (cookie && publicPath.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}