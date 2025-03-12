# Aplicación de E-Commerce

Esta es una aplicación de E-Commerce desarrollada con React, TypeScript, Vite y Zustand para la gestión del estado global. Se implementó un **monorepo** para dividir la aplicación en múltiples paquetes reutilizables, facilitando la compartición de código entre distintos proyectos.

La aplicación de E-Commerce permite a los usuarios clientes navegar por el catálogo de productos, gestionar el carrito de compras y generar facturas que se almacenan en el localStorage. Además, los usuarios administradores tienen acceso a un panel donde pueden visualizar y detallar todas las transacciones realizadas.

## Instalación

1. Clonar el repositorio:

```bash
   git clone https://github.com/larakalix/smart-talent-test.git
```

2. Instalar las dependencias:

```bash
   pnpm install
```

3. Configurar el archivo .env:

```bash
   VITE_COUNTRY_API_URL=https://restcountries.com/v3.1/
```

4. Iniciar el entorno de desarrollo:

```bash
  pnpm run dev
```

### Useful Commands

-   `pnpm build` - Construye todos los paquetes, incluido el sitio Storybook
-   `pnpm dev` - Ejecute todos los paquetes localmente y obtenga una vista previa con Storybook
-   `pnpm lint` - Lint all packages
-   `pnpm changeset` - Generar un conjunto de cambios
-   `pnpm clean` - Limpia todas las carpetas `node_modules` y `dist` (ejecuta el script de limpieza de cada paquete)

## Decisiones arquitectónicas

### Vercel

-   La aplicación está configurada para desplegarse mediante una estrategia de CI/CD.

-   **Escalabilidad y robustez**
-   **Simplicidad y rapidez en el despliegue**
-   **Integración nativa de CI/CD**
-   **Experiencia de desarrollador**

### Turborepo

[Turborepo](https://turbo.build/repo) es un sistema de compilación de alto rendimiento para bases de código JavaScript y TypeScript. Fue diseñado a partir de los flujos de trabajo utilizados por las grandes organizaciones de ingeniería de software para enviar código a escala. Turborepo abstrae la configuración compleja necesaria para los repositorios mono y proporciona compilaciones rápidas e incrementales con almacenamiento en caché remoto sin configuración.

El uso de Turborepo simplifica la administración de su sistema de diseño monorepo, ya que puede tener un único proceso de lint, compilación, prueba y lanzamiento para todos los paquetes. [Aprende](https://vercel.com/blog/monorepos-are-changing-how-teams-build-software) sobre cómo los monorepositorios mejoran su flujo de trabajo de desarrollo.

### Gestión del estado con Zustand

-   Razón para usar Zustand:
    -   Zustand es una librería de gestión de estado ligera y sencilla que permite separar la lógica de estado de la presentación. Esto conduce a un código más limpio, fácil de mantener y con un rendimiento óptimo.
-   Ventajas
    -   Simplicidad: Se reduce el boilerplate y se dispone de una API intuitiva.
    -   Rendimiento: Solo se re-renderizan los componentes que dependen del fragmento de estado modificado.
    -   Claridad: La lógica del estado se centraliza, facilitando su mantenimiento y la realización de pruebas.

### React Query para la obtención de datos

He simulado el fetch de datos para el mock de productos, pretendiendo utilizar un método que podria realizar un fetch a un endpoint, de igual manera, se consume el API de países con React Query para manejar de manera precisa, habilitando la capacidad de manejar un catálogo por caché y evitar refetching innecesario.

-   Gestión de caché automática

-   Sincronización y actualización en segundo plano

-   Manejo simplificado de estados de carga y error

-   Reintentos y refetching inteligente

## Estructura de Carpetas

La estructura del proyecto está diseñada para separar responsabilidades y facilitar la escalabilidad y el mantenimiento:

```bash
├── src/
│   ├── components/             # Componentes UI reutilizables
│   │   ├── common/             # Elementos genéricos (Botón, Input, etc.)
│   │   ├── layout/             # Componentes de diseño (Header, Footer)
│   │   └── ProductCard.tsx     # Ejemplo: Componente para mostrar información de un producto
│   ├── pages/                  # Vistas completas o páginas
│   │   ├── client/             # Páginas específicas para clientes (Home, Carrito, Checkout)
│   │   └── admin/              # Páginas específicas para administradores (Facturas)
│   │   └── auth/               # Páginas específicas para autenticación
│   ├── stores/                 # Gestión global del estado (Zustand)
│   ├── providers/              # Providers personalizados para manejar contextos
│   ├── services/               # Lógica de negocio y llamadas a APIs
│   ├── lib/                    # Funciones de utilidad y helpers
│   ├── types/                  # Tipos e interfaces de TypeScript
│   ├── App.tsx                 # Componente raíz de la aplicación
│   ├── main.tsx                # Punto de entrada de la aplicación
```

## ¿Por qué separar pages y components?

-   components:

    -   Contiene componentes pequeños y reutilizables, como botones, inputs y tarjetas de producto.
    -   Estos componentes están diseñados para ser flexibles y reutilizables en diferentes contextos, garantizando una apariencia coherente en toda la aplicación.

-   pages:
    -   Agrupa los componentes que representan vistas completas o páginas de la aplicación.
    -   Cada página es una composición de varios componentes reutilizables y gestiona la lógica de navegación y presentación específica de cada pantalla.
    -   Esta separación permite un mejor aislamiento entre la lógica de UI (componentes) y la estructura de navegación (páginas).

Enlaces de utilidad:

-   🏎 [Turborepo](https://turbo.build/repo)
-   🚀 [React](https://reactjs.org/)
-   🛠 [Tsup](https://github.com/egoist/tsup)
-   📖 [Storybook](https://storybook.js.org/)
