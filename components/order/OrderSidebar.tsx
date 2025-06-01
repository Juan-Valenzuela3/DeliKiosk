import { prisma } from '@/src/lib/prisma'
import CategoryIcon from '../ui/CategoryIcon'
import Logo from '../ui/Logo'

async function getCategories() {
  return await prisma.category.findMany()
}

export default async function OrderSidebar() {
  const categories = await getCategories()
  
  return (
    <aside className="md:w-72 md:h-screen glass-effect border-r border-white/20">
        <div className="p-6">
            <Logo />
        </div>
        <nav className='px-4 space-y-2'>
            {categories.map(category => (
              <CategoryIcon 
                key={category.id}
                category={category}
              />
            ))}
        </nav>
    </aside>
  )
}
