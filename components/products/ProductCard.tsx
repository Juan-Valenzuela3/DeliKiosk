import { formatCurrency, getImagePath } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({product} : ProductCardProps) {

  const imagePath = getImagePath(product.image)

  return (
    <div className="card-modern overflow-hidden group hover:scale-105 transition-transform duration-300
                   /* Mobile optimizations */
                   mb-20 md:mb-0">

        <div className="relative overflow-hidden rounded-t-2xl">
            <Image
                width={400}
                height={500}
                src={imagePath}
                alt={`Imagen platillo ${product.name}`}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                {product.name}
            </h3>
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-3 md:mb-4">
              { formatCurrency( product.price )}
            </p>
            <AddProductButton 
              product={product}
            />
        </div>
    </div>
  )
}
