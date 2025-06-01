import ProductCard from "@/components/products/ProductCard"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })
  return products
}

export default async function OrderPage({params}: { params: { category : string }}) {
  const products = await getProducts(params.category)
  
  return (
    <>
      <Heading>
        Elige y personaliza tu pedido a continuación
      </Heading>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 
                     gap-4 md:gap-6 items-start pb-24 md:pb-6">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </>
  )
}

