import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        // Hacer una consulta simple y rápida para mantener la conexión activa
        const result = await prisma.$queryRaw`SELECT 1 as ping`;
        
        return NextResponse.json({ 
            success: true, 
            timestamp: new Date().toISOString(),
            message: "Database ping successful",
            result 
        });
    } catch (error) {
        console.error('Database ping failed:', error);
        
        return NextResponse.json({ 
            success: false, 
            timestamp: new Date().toISOString(),
            message: "Database ping failed",
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}
