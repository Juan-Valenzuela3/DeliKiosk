import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        // Alternativa: Contar registros en una tabla existente (más liviano que traer datos)
        const categoryCount = await prisma.category.count();
        
        return NextResponse.json({ 
            success: true, 
            timestamp: new Date().toISOString(),
            message: "Database ping successful via category count",
            categoryCount 
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
