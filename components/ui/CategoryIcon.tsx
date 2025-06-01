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
            flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-md backdrop-blur-sm border border-white/20 mb-2`}
        >
            <div className={`w-12 h-12 relative p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-gray-100'} transition-colors duration-200`}>
                <Image
                    fill
                    src={`/icon_${category.slug}.svg`}
                    alt="Imagen Categoria"
                    className="p-2"
                />
            </div>

            <Link
                className="text-lg font-semibold flex-1 hover:text-blue-600 transition-colors duration-200"
                href={`/order/${category.slug}`}
            >{category.name}</Link>
        </div>
    )
}
