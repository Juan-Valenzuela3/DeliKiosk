# 🔧 Guía Técnica - DeliKiosk

## 📋 Tabla de Contenidos
- [Arquitectura del Sistema](#arquitectura-del-sistema)
- [Configuración de Supabase](#configuración-de-supabase)
- [Optimizaciones de Performance](#optimizaciones-de-performance)
- [Guía de Desarrollo](#guía-de-desarrollo)
- [Troubleshooting](#troubleshooting)

## 🏗️ Arquitectura del Sistema

### **Frontend Architecture**
```
App Router (Next.js 14)
├── Server Components (RSC)
├── Client Components (useState, useEffect)
├── Server Actions (formularios)
└── Static Generation (SSG)
```

### **State Management**
```
Zustand Store
├── Order Management
├── Product State
├── UI State
└── Persistent Storage
```

### **Database Schema**
```sql
Category {
  id       String  @id @default(cuid())
  name     String
  slug     String  @unique
  products Product[]
}

Product {
  id          String  @id @default(cuid())
  name        String
  price       Float
  image       String
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  orderItems  OrderProduct[]
}

Order {
  id      String  @id @default(cuid())
  name    String
  total   Float
  date    DateTime @default(now())
  status  Boolean  @default(false)
  orderProducts OrderProduct[]
}

OrderProduct {
  id        String  @id @default(cuid())
  orderId   String
  productId String
  quantity  Int
  order     Order   @relation(fields: [orderId], references: [id])
  product   Product @relation(fields: [productId], references: [id])
}
```

## 🗄️ Configuración de Supabase

### **1. Crear Proyecto en Supabase**
1. Ir a [supabase.com](https://supabase.com)
2. Crear nuevo proyecto
3. Obtener URL y API Key

### **2. Variables de Entorno**
```env
# Supabase Configuration
DATABASE_URL="postgresql://postgres.xxxx:password@aws-0-region.pooler.supabase.com:5432/postgres"
DIRECT_URL="postgresql://postgres.xxxx:password@aws-0-region.pooler.supabase.com:5432/postgres"
```

### **3. Configurar Row Level Security (RLS)**
```sql
-- Habilitar RLS en todas las tablas
ALTER TABLE "Category" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Product" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Order" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "OrderProduct" ENABLE ROW LEVEL SECURITY;

-- Políticas para acceso público (ajustar según necesidades)
CREATE POLICY "Enable read access for all users" ON "Category" FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON "Product" FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON "Order" FOR INSERT WITH CHECK (true);
```

### **4. Migraciones**
```bash
# Aplicar esquema a Supabase
npx prisma db push

# Generar cliente
npx prisma generate

# Verificar conexión
npx prisma db seed
```

## ⚡ Optimizaciones de Performance

### **Next.js Optimizations**
```javascript
// next.config.mjs
const nextConfig = {
  // Optimización de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' }
    ]
  },
  
  // Optimización de builds
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  
  // Compresión
  compress: true,
  
  // Optimización de paquetes
  experimental: {
    optimizePackageImports: [
      'react-toastify',
      '@heroicons/react'
    ]
  }
};
```

### **Database Optimizations**
```prisma
// Índices para mejor performance
model Product {
  id         String   @id @default(cuid())
  name       String
  categoryId String
  category   Category @relation(fields: [categoryId], references: [id])
  
  @@index([categoryId]) // Índice para filtros por categoría
  @@index([name])       // Índice para búsquedas
}
```

### **Bundle Optimization**
```javascript
// Lazy loading de componentes
const AdminPanel = dynamic(() => import('./AdminPanel'), {
  loading: () => <LoadingSpinner />
});

// Code splitting por rutas
const ProductManagement = dynamic(() => import('./ProductManagement'));
```

## 👨‍💻 Guía de Desarrollo

### **Convenciones de Código**

#### **Naming Conventions**
```typescript
// Componentes: PascalCase
export default function ProductCard() {}

// Hooks: camelCase con 'use'
export function useOrderState() {}

// Constantes: UPPER_SNAKE_CASE
const API_ENDPOINTS = {
  PRODUCTS: '/api/products'
};

// Variables: camelCase
const productList = [];
```

#### **Estructura de Componentes**
```typescript
// 1. Imports
import { useState, useEffect } from 'react';
import { Product } from '@prisma/client';

// 2. Types
interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

// 3. Component
export default function ProductCard({ product, onAdd }: ProductCardProps) {
  // 3.1 Hooks
  const [isLoading, setIsLoading] = useState(false);
  
  // 3.2 Handlers
  const handleAddToCart = () => {
    setIsLoading(true);
    onAdd(product);
    setIsLoading(false);
  };
  
  // 3.3 Render
  return (
    <div className="card-modern">
      {/* JSX */}
    </div>
  );
}
```

### **Styling Guidelines**

#### **Tailwind Patterns**
```css
/* Responsive Design */
className="text-lg md:text-xl lg:text-2xl"

/* Glass Morphism */
className="glass-effect backdrop-blur-md bg-white/80"

/* Modern Cards */
className="card-modern rounded-2xl shadow-lg hover:shadow-2xl"

/* Buttons */
className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600"

/* Mobile Optimizations */
className="p-3 md:p-4 lg:p-6"
```

#### **CSS Custom Properties**
```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.8);
  --glass-border: rgba(255, 255, 255, 0.2);
  --shadow-soft: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --gradient-primary: linear-gradient(135deg, #3b82f6, #8b5cf6);
}
```

### **State Management Patterns**

#### **Zustand Store Structure**
```typescript
interface StoreState {
  // State
  order: OrderItem[];
  isLoading: boolean;
  
  // Actions
  addToOrder: (product: Product) => void;
  removeFromOrder: (productId: string) => void;
  clearOrder: () => void;
  
  // Computed
  totalPrice: number;
  itemCount: number;
}

export const useStore = create<StoreState>((set, get) => ({
  // Initial state
  order: [],
  isLoading: false,
  
  // Actions
  addToOrder: (product) => set((state) => ({
    order: [...state.order, { ...product, quantity: 1 }]
  })),
  
  // Computed values
  get totalPrice() {
    return get().order.reduce((total, item) => 
      total + (item.price * item.quantity), 0
    );
  }
}));
```

## 🐛 Troubleshooting

### **Errores Comunes**

#### **Database Connection Issues**
```bash
# Error: Can't reach database server
# Solución: Verificar URL de Supabase
echo $DATABASE_URL

# Verificar conectividad
npx prisma db push --preview-feature
```

#### **Prisma Client Errors**
```bash
# Error: Prisma client is not generated
# Solución: Regenerar cliente
npx prisma generate

# Error: Migration conflicts
# Solución: Reset y reseed
npx prisma migrate reset
npx prisma db seed
```

#### **Next.js Build Errors**
```bash
# Error: Module not found
# Solución: Limpiar caché
rm -rf .next
npm run build

# Error: Type errors
# Solución: Verificar tipos
npx tsc --noEmit
```

### **Performance Issues**

#### **Slow Database Queries**
```sql
-- Analizar queries lentas
EXPLAIN ANALYZE SELECT * FROM "Product" WHERE "categoryId" = 'xxx';

-- Añadir índices
CREATE INDEX idx_product_category ON "Product"("categoryId");
```

#### **Large Bundle Size**
```bash
# Analizar bundle
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build

# Optimizar imports
// ❌ Malo
import * as Icons from '@heroicons/react';

// ✅ Bueno
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
```

### **Mobile Issues**

#### **Touch Performance**
```css
/* Mejorar rendimiento táctil */
.touch-optimized {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
```

#### **iOS Safari Fixes**
```css
/* Prevenir zoom en inputs */
@media screen and (max-width: 768px) {
  input, textarea, select {
    font-size: 16px !important;
  }
}

/* Fix de altura de viewport */
.full-height {
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height */
}
```

## 🔍 Debugging Tools

### **Development**
```bash
# Prisma Studio (Database GUI)
npx prisma studio

# Next.js Bundle Analyzer
ANALYZE=true npm run build

# Performance monitoring
npm install -g lighthouse
lighthouse http://localhost:3000
```

### **Production Monitoring**
```javascript
// Error boundary para capturar errores
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Enviar a servicio de monitoreo
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
```

---

Esta guía técnica complementa el README principal con información detallada para desarrolladores.
