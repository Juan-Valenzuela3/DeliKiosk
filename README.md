# 🥪 DeliKiosk - Sistema de Pedidos Moderno

<div align="center">

![DeliKiosk Logo](./public/logo.svg)

**Una plataforma moderna y responsive para la gestión de pedidos y productos en restaurantes y cafeterías**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.23-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.10.2-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)](https://supabase.com/)

</div>

## 🚀 Características Principales

### 🛍️ **Sistema de Pedidos Inteligente**
- **Interfaz Intuitiva**: Navegación por categorías con iconos visuales
- **Carrito Dinámico**: Bottom sheet en móvil, sidebar en desktop
- **Gestión en Tiempo Real**: Actualizaciones instantáneas del estado
- **Validación Robusta**: Esquemas Zod para datos seguros

### 📱 **Experiencia Móvil Optimizada**
- **Mobile-First Design**: Diseño responsivo desde el primer momento
- **Bottom Sheet**: Panel de pedidos deslizable en dispositivos móviles
- **Navegación Táctil**: Scroll horizontal con snap para categorías
- **Touch Optimizado**: Feedback visual y gestos mejorados

### 🎨 **Diseño Moderno**
- **Glass Morphism**: Efectos de cristal esmerilado
- **Gradientes Dinámicos**: Colores vibrantes y transiciones suaves
- **Tipografía Poppins**: Fuente moderna y legible
- **Animaciones Fluidas**: Transiciones de 300ms optimizadas

### ⚡ **Rendimiento Superior**
- **Server-Side Rendering**: Carga inicial ultrarrápida
- **Static Generation**: Páginas pre-generadas para mejor SEO
- **Image Optimization**: Imágenes optimizadas automáticamente
- **Bundle Splitting**: Código dividido para cargas eficientes

### 🔧 **Panel de Administración**
- **Dashboard Intuitivo**: Gestión completa de productos y pedidos
- **CRUD Completo**: Operaciones sobre productos y categorías
- **Upload de Imágenes**: Integración con Cloudinary
- **Búsqueda Avanzada**: Filtros y paginación

## 🛠️ Stack Tecnológico

### **Frontend**
- **[Next.js 14.2.23](https://nextjs.org/)** - Framework React con SSR/SSG
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS 3.3](https://tailwindcss.com/)** - Framework CSS utility-first
- **[React 18](https://react.dev/)** - Biblioteca de interfaz de usuario

### **Backend & Database**
- **[Supabase](https://supabase.com/)** - Base de datos PostgreSQL en la nube
- **[Prisma 5.10.2](https://www.prisma.io/)** - ORM type-safe para TypeScript
- **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - Endpoints de API

### **Estado & UI**
- **[Zustand 4.5.2](https://zustand-demo.pmnd.rs/)** - Gestión de estado ligera
- **[React Toastify 10.0.4](https://fkhadra.github.io/react-toastify/)** - Notificaciones elegantes
- **[Heroicons 2.1.1](https://heroicons.com/)** - Iconos SVG optimizados
- **[SWR 2.2.5](https://swr.vercel.app/)** - Fetching de datos con cache

### **Validación & Utilidades**
- **[Zod 3.22.4](https://zod.dev/)** - Validación de esquemas TypeScript
- **[Next Cloudinary 6.2.1](https://next.cloudinary.dev/)** - Gestión de imágenes

### **Development Tools**
- **[ESLint 8](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[Autoprefixer 10](https://autoprefixer.github.io/)** - PostCSS plugin
- **[PostCSS 8](https://postcss.org/)** - Transformador de CSS

## 📂 Estructura del Proyecto

```
DeliKiosk/
├── 📁 app/                    # App Router de Next.js 14
│   ├── 📁 admin/             # Panel de administración
│   │   ├── 📁 orders/        # Gestión de pedidos
│   │   └── 📁 products/      # Gestión de productos
│   ├── 📁 order/             # Sistema de pedidos
│   │   └── 📁 [category]/    # Páginas dinámicas por categoría
│   └── 📁 orders/            # Historial de pedidos
├── 📁 components/            # Componentes React reutilizables
│   ├── 📁 admin/             # Componentes de administración
│   ├── 📁 order/             # Componentes del sistema de pedidos
│   ├── 📁 products/          # Componentes de productos
│   └── 📁 ui/                # Componentes de interfaz
├── 📁 prisma/                # Configuración de base de datos
│   ├── 📄 schema.prisma      # Esquema de la base de datos
│   ├── 📁 migrations/        # Migraciones de BD
│   └── 📁 data/             # Datos semilla
├── 📁 src/                   # Lógica de aplicación
│   ├── 📄 store.ts          # Estado global con Zustand
│   ├── 📁 lib/              # Utilidades y configuraciones
│   ├── 📁 schema/           # Esquemas de validación Zod
│   └── 📁 utils/            # Funciones de utilidad
└── 📁 public/               # Assets estáticos
    ├── 📁 products/         # Imágenes de productos
    └── 📄 *.svg            # Iconos y logos
```

## 🚀 Instalación y Configuración

### **Prerequisitos**
- Node.js 18+ 
- npm o yarn
- Cuenta en Supabase

### **1. Clonar el Repositorio**
```bash
git clone https://github.com/Juan-Valenzuela3/DeliKiosk.git
cd DeliKiosk
```

### **2. Instalar Dependencias**
```bash
npm install
# o
yarn install
```

### **3. Configurar Variables de Entorno**

Crea un archivo `.env` en la raíz del proyecto:

```env
# Database (Supabase)
DATABASE_URL="postgresql://username:password@host:port/database"
DIRECT_URL="postgresql://username:password@host:port/database"

# Cloudinary (para imágenes)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="tu_cloud_name"
CLOUDINARY_API_KEY="tu_api_key"
CLOUDINARY_API_SECRET="tu_api_secret"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### **4. Configurar Base de Datos**
```bash
# Generar cliente Prisma
npx prisma generate

# Ejecutar migraciones
npx prisma db push

# Sembrar datos (opcional)
npx prisma db seed
```

### **5. Ejecutar en Desarrollo**
```bash
npm run dev
# o
yarn dev
```

### **6. Acceder a la Aplicación**
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Admin Panel**: [http://localhost:3000/admin](http://localhost:3000/admin)

## 📱 Optimizaciones Móviles

DeliKiosk está completamente optimizado para dispositivos móviles con:

### **📐 Layout Responsivo**
- **Mobile**: Layout apilado vertical con bottom sheet
- **Desktop**: Layout horizontal con sidebars fijos
- **Breakpoints**: Sistema mobile-first con Tailwind

### **🎯 UX Móvil**
- **Bottom Sheet**: Panel de pedidos deslizable
- **Horizontal Scroll**: Navegación táctil de categorías
- **Snap Scroll**: Puntos de anclaje para mejor UX
- **Touch Feedback**: Animaciones de presión

### **⚡ Performance Móvil**
- **Touch Manipulation**: Gestos optimizados
- **Font Size iOS**: Previene zoom automático
- **Image Optimization**: Tamaños adaptativos
- **CSS Optimizations**: Scroll suave y transiciones

## 🛣️ Rutas de la Aplicación

### **Públicas**
- `/` - Página de inicio
- `/order/[category]` - Catálogo de productos por categoría
- `/orders` - Seguimiento de pedidos

### **Administración**
- `/admin` - Dashboard principal
- `/admin/products` - Gestión de productos
- `/admin/products/new` - Crear producto
- `/admin/products/[id]/edit` - Editar producto
- `/admin/orders` - Gestión de pedidos

## 🎨 Características de Diseño

### **🌈 Paleta de Colores**
- **Primario**: Degradado azul-púrpura (`blue-600` → `purple-600`)
- **Secundario**: Tonos grises modernos
- **Acentos**: Ámbar y naranja para precios
- **Fondo**: Degradado suave gris-azul

### **✨ Efectos Visuales**
- **Glass Morphism**: `backdrop-blur-md bg-white/80`
- **Shadows**: Sombras multicapa para profundidad
- **Gradients**: Degradados dinámicos en botones y textos
- **Animations**: Transiciones suaves de 300ms

### **📝 Tipografía**
- **Fuente**: Poppins (Variable weight)
- **Escalas**: Sistema responsive (`text-lg md:text-xl`)
- **Weights**: 400, 500, 600, 700, 800
- **Line Height**: Optimizado para legibilidad

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Producción
npm run build        # Build optimizado
npm run start        # Servidor de producción

# Calidad de código
npm run lint         # Linter ESLint

# Base de datos
npx prisma studio    # Interface visual de BD
npx prisma generate  # Generar cliente
npx prisma db push   # Aplicar cambios al esquema
npx prisma db seed   # Sembrar datos iniciales
```

## 📊 Performance

### **Métricas de Lighthouse**
- **Performance**: 95+ 🟢
- **Accessibility**: 100 🟢
- **Best Practices**: 95+ 🟢
- **SEO**: 100 🟢

### **Optimizaciones**
- **Image Optimization**: Next.js automático
- **Bundle Splitting**: Código dividido por rutas
- **Tree Shaking**: Eliminación de código no usado
- **Compression**: Gzip/Brotli en producción

## 🚀 Despliegue

### **Vercel (Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Configurar variables de entorno en dashboard
```

### **Otras Plataformas**
- **Netlify**: Compatible con build estático
- **Railway**: Para full-stack con BD
- **Digital Ocean**: App Platform

## 🤝 Contribuir

1. **Fork** el proyecto
2. **Crea** una rama feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -am 'Añadir nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Abre** un Pull Request

## 📝 Changelog

### **v0.1.0** (Actual)
- ✅ Sistema de pedidos completo
- ✅ Panel de administración
- ✅ Optimización móvil completa
- ✅ Migración a Supabase
- ✅ Diseño glass morphism
- ✅ Integración Cloudinary
- ✅ Validación con Zod
- ✅ Estado global con Zustand

## 🐛 Reporte de Bugs

Si encuentras algún error, por favor abre un [issue](https://github.com/Juan-Valenzuela3/DeliKiosk/issues) con:

- Descripción del problema
- Pasos para reproducir
- Comportamiento esperado
- Screenshots (si aplica)
- Información del navegador/dispositivo

## 📄 Licencia

Este proyecto está bajo la **Licencia Creative Commons Attribution-NonCommercial 4.0 International**.

**Esto significa que puedes:**
- ✅ Ver y estudiar el código
- ✅ Usar para proyectos personales
- ✅ Modificar y crear derivados
- ✅ Compartir con atribución

**No puedes:**
- ❌ Usar comercialmente
- ❌ Vender o monetizar
- ❌ Distribuir sin atribución

Ver [LICENSE](./LICENSE) para más detalles.

## 👨‍💻 Autor

**Juan Valenzuela**
- 🌐 [GitHub](https://github.com/Juan-Valenzuela3)
- 💼 [LinkedIn](https://www.linkedin.com/in/juan-valenzuela-camelo)
- 📧 [Email](mailto:juan.valenzuela@ejemplo.com)

---

<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**

Hecho con ❤️ usando Next.js, TypeScript y Tailwind CSS

</div>

