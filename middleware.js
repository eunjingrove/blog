import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(request) {
    const session = await getToken({ req: request })
  
    // 로그인 체크
    // if (request.nextUrl.pathname.startsWith('/write')) {
    //   if (session == null) {
    //     return NextResponse.redirect(new URL('http://localhost:3000/api/auth/signin'))
    //   }
    // }
  
    // /list 요청 로그
    if (request.nextUrl.pathname.startsWith('/list')) {
      console.log(new Date().toLocaleString())
      console.log(request.headers.get('sec-ch-ua-platform'))
    }
  
    // 모든 요청 통과
    return NextResponse.next()
  }
  