import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    // Solo ejecutar el ping en producción y cada cierto tiempo
    if (process.env.NODE_ENV === 'production') {
        const lastPing = request.cookies.get('lastDbPing')?.value;
        const now = Date.now();
        const tenMinutes = 10 * 60 * 1000; // 10 minutos en millisegundos
        
        if (!lastPing || (now - parseInt(lastPing)) > tenMinutes) {
            // Hacer ping en segundo plano (no bloquear la respuesta)
            fetch(`${request.nextUrl.origin}/api/ping`)
                .catch(err => console.error('Background ping failed:', err));
            
            // Actualizar cookie
            const response = NextResponse.next();
            response.cookies.set('lastDbPing', now.toString(), {
                maxAge: tenMinutes,
                httpOnly: true
            });
            return response;
        }
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
