# Drip ARG — Tienda Online

Tienda de ropa online hecha con Next.js. Permite ver productos por categoría, ver el detalle de cada uno y administrar el catálogo desde un panel de administración.

## ¿Cómo correrlo en tu computadora?

1. Instalá las dependencias:
```bash
npm install
```

2. Creá un archivo `.env` con la URL de tu base de datos Neon:
```
DATABASE_URL="tu-url-de-neon-aqui"
```

3. Iniciá el servidor:
```bash
npm run dev
```

4. Abrí el navegador en [http://localhost:3000](http://localhost:3000)

## Tecnologías usadas

- **Next.js** — framework de React para el frontend y backend
- **Prisma** — para conectarse y consultar la base de datos
- **Neon** — base de datos PostgreSQL en la nube
- **Vercel** — para publicar la página en internet

## Páginas principales

| Ruta | Descripción |
|---|---|
| `/` | Inicio con categorías y productos destacados |
| `/categoria/[nombre]` | Lista de productos por categoría |
| `/producto/[id]` | Detalle de un producto |
| `/admin` | Panel para agregar, editar y eliminar productos |
| `/como-pedir` | Instrucciones para hacer un pedido |
