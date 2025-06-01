import { prisma } from '@/src/lib/prisma'
import CategoryIcon from '../ui/CategoryIcon'
import Logo from '../ui/Logo'

async function getCategories() {
  return await prisma.category.findMany()
}

export default async function OrderSidebar() {
  const categories = await getCategories()
  
  return (
    <aside className="md:w-72 md:h-screen glass-effect border-r border-white/20 
                     /* Mobile styles */
                     w-full h-auto md:sticky md:top-0 z-10">
        <div className="p-4 md:p-6">
            <Logo />
        </div>
        
        {/* Mobile horizontal scroll, desktop vertical */}
        <nav className='px-4 pb-4 md:pb-0 
                       flex md:flex-col overflow-x-auto md:overflow-x-visible gap-2 md:gap-2
                       scrollbar-hide
                       /* Mobile scroll snap for better UX */
                       scroll-smooth snap-x snap-mandatory md:snap-none'>
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
