"use client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from 'next/navigation'
import { Category } from "@prisma/client"

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {
    const params = useParams<{category: string}>()
    const isActive = category.slug === params.category

    return (
        <div className={`${isActive 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105' 
            : 'bg-white/60 hover:bg-white/80 text-gray-700'} 
            
            /* Mobile: compact horizontal layout */
            flex flex-col md:flex-row items-center gap-2 md:gap-4 
            p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-md 
            backdrop-blur-sm border border-white/20 mb-0 md:mb-2
            
            /* Mobile: minimum width for horizontal scroll + snap behavior */
            min-w-[80px] md:min-w-0 flex-shrink-0 md:flex-shrink
            text-center md:text-left snap-center md:snap-align-none
            
            /* Touch improvements */
            active:scale-95 md:active:scale-100 select-none`}
        >
            <div className={`w-8 h-8 md:w-12 md:h-12 relative p-1 md:p-2 rounded-lg 
                           ${isActive ? 'bg-white/20' : 'bg-gray-100'} transition-colors duration-200`}>
                <Image
                    fill
                    src={`/icon_${category.slug}.svg`}
                    alt="Imagen Categoria"
                    className="p-1 md:p-2"
                />
            </div>

            <Link
                className="text-xs md:text-lg font-medium md:font-semibold flex-1 hover:text-blue-600 
                          transition-colors duration-200 leading-tight"
                href={`/order/${category.slug}`}
            >{category.name}</Link>
        </div>
    )
}
