# DELIKIOSK

DeliKiosk es una plataforma diseñada para la gestión de pedidos y productos en un entorno digital, permitiendo la creación, actualización y administración eficiente de los mismos. Este proyecto está construido con **Next.js** y **TypeScript**, asegurando un rendimiento óptimo y una experiencia de usuario fluida.

## Características

- **Gestión de Pedidos:** Realiza operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los pedidos.
- **Gestión de Productos:** Agrega, actualiza y administra productos fácilmente.
- **Panel de Administración:** Una interfaz dedicada para la gestión eficiente de pedidos y productos.
- **Diseño Moderno:** UI construida con **Tailwind CSS** para una experiencia visual atractiva y responsiva.
- **Arquitectura Modular:** Código organizado y fácil de mantener.
- **Alto Rendimiento:** Uso de Next.js para mejorar la carga y navegación de la aplicación.
- **Base de Datos y ORM:** Implementación de **Prisma** para la gestión eficiente de la base de datos.
- **Despliegue en la Nube:** Implementado en **Vercel** para el frontend y **Render** para el backend, asegurando escalabilidad y disponibilidad.
- **Seguridad y Buenas Prácticas:** Implementación de TypeScript y ESLint para un código más robusto.

## Tecnologías Utilizadas

- **Framework Frontend:** Next.js con soporte para SSR y SSG.
- **Lenguaje:** TypeScript.
- **Estilos:** Tailwind CSS.
- **Gestión del Estado:** Manejo eficiente de datos con acciones y hooks personalizados.
- **Base de Datos:** Prisma ORM para la interacción con la base de datos.
- **Despliegue:** Vercel para alojamiento del frontend y Render para el backend.
- **Linting y Calidad del Código:** ESLint y configuración con Prettier.
- **Configuración de Entorno:** Uso de variables de entorno con `.env`.

## Instalación y Configuración

1. **Clona el repositorio:**

   ```sh
   git clone https://github.com/Juan-Valenzuela3/DeliKiosk.git
   ```

2. **Instala las dependencias:**

   ```sh
   cd DeliKiosk
   npm install
   ```

3. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   DATABASE_URL=tu_base_de_datos
   ```

4. **Ejecuta el proyecto en modo desarrollo:**

   ```sh
   npm run dev
   ```

5. **Accede a la aplicación:**

   - Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

6. **Configurando la base de datos:**
   - Ejecuta **npx prisma migrate dev** (Esto creará las migraciones)
   - Luego **npx prims studio** (Veremos los modelos de la migración)
   - Envía los datos a prima co **npx prisma db seed**
   - Espera un momento a que se envíen los datos y luego ya podras ver los productos de la DB
   - Construye el proyecto para verificar que todo está bien **npm run build**
   - Finalmente, dentro de vercel hay que cambiar las variables de entorno, la url DB.

## Rutas Principales

- `/` → Página principal.
- `/admin/orders` → Gestión de pedidos.
- `/admin/products` → Gestión de productos.
- `/orders` → Órdenes completadas.

## Autor

- [GitHub](https://github.com/Juan-Valenzuela3)
- [LinkedIn](https://www.linkedin.com/in/juan-valenzuela-camelo)

## Licencia

Este proyecto está licenciado bajo la [Licencia Creative Commons Atribución-NoComercial 4.0 Internacional](./LICENSE), lo que significa que puedes ver y modificar el código, pero no puedes distribuirlo ni venderlo con fines comerciales.

