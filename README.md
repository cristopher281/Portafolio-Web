# 🚀 Portfolio Web - React + Vite

Portfolio personal moderno desarrollado con **React**, **Vite**, **Framer Motion** y diseño futurista.

## ✨ Características

- ⚡ **Vite** - Bundler ultra rápido con HMR instantáneo
- ⚛️ **React 18** - Librería UI moderna con hooks
- 🎨 **Framer Motion** - Animaciones fluidas y profesionales
- 🛣️ **React Router** - Navegación SPA sin recargas
- 🎯 **React Icons** - Miles de iconos modernos
- 🌈 **Diseño Futurista** - Tema oscuro con gradientes cyan/purple
- 📱 **Responsive** - Adaptado a todos los dispositivos
- 🎭 **Animaciones Avanzadas** - Efectos parallax, hover, y scroll reveal

## 📋 Requisitos Previos

- **Node.js** 18+ ([Descargar aquí](https://nodejs.org/))
- **npm** (incluido con Node.js)

Verifica tu instalación:
```bash
node --version
npm --version
```

## 🔧 Instalación Rápida

### Opción 1: Script Automático (Recomendado)

1. **Ejecuta el script de configuración:**
   ```bash
   setup.bat
   ```
   Esto copiará automáticamente todos los archivos CSS e imágenes a las carpetas correctas.

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador en:** `http://localhost:5173`

### Opción 2: Manual

1. **Crea las carpetas necesarias:**
   ```bash
   mkdir src\styles
   mkdir src\assets\images
   mkdir public\assets\images
   ```

2. **Copia los archivos CSS:**
   ```bash
   copy assets\css\base.css src\styles\
   copy assets\css\components.css src\styles\
   copy assets\css\layout.css src\styles\
   copy assets\css\pages.css src\styles\
   ```

3. **Copia las imágenes:**
   ```bash
   xcopy *.jpg public\ /Y
   xcopy assets\images\*.* public\assets\images\ /E /I /Y
   ```

4. **Instala las dependencias:**
   ```bash
   npm install
   ```

5. **Inicia el servidor:**
   ```bash
   npm run dev
   ```

## 📦 Dependencias Instaladas

### Producción
- `react` ^18.3.1 - Librería UI
- `react-dom` ^18.3.1 - Renderizado DOM
- `react-router-dom` ^6.26.0 - Routing
- `framer-motion` ^11.5.4 - Animaciones
- `react-icons` ^5.3.0 - Iconos

### Desarrollo
- `vite` ^5.4.2 - Bundler
- `@vitejs/plugin-react` ^4.3.1 - Plugin React para Vite

## 📁 Estructura del Proyecto

```
Portafolio-Web/
├── public/                    # Archivos estáticos
│   ├── assets/images/        # Imágenes públicas
│   ├── foto-perfil.jpg       # Foto de perfil
│   └── *.jpg                 # Otras imágenes
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── AnimatedBackground.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── Card.jsx
│   ├── pages/                # Páginas principales
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Offers.jsx
│   │   └── Contact.jsx
│   ├── hooks/                # Custom hooks
│   │   ├── useScrollReveal.js
│   │   └── useNavigation.js
│   ├── styles/               # Estilos CSS
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   └── pages.css
│   ├── App.jsx               # Componente raíz
│   └── main.jsx              # Punto de entrada
├── backup-html/              # Respaldo de archivos HTML originales
├── index.html                # HTML base para Vite
├── package.json              # Dependencias y scripts
├── vite.config.js            # Configuración de Vite
├── setup.bat                 # Script de configuración
└── README.md                 # Este archivo
```

## 🎯 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en http://localhost:5173 |
| `npm run build` | Construye la aplicación para producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción |

## 🎨 Características de Diseño

### Paleta de Colores
- **Primary Cyan:** `#00fff7` - Color principal para acentos
- **Primary Blue:** `#0ea5e9` - Color secundario
- **Accent Purple:** `#8b5cf6` - Acento morado
- **Accent Pink:** `#ec4899` - Acento rosa
- **Dark Background:** `#0a0a0f` - Fondo principal
- **Dark Card:** `#13131a` - Fondo de tarjetas

### Efectos Visuales
- ✨ Partículas flotantes animadas
- 🌊 Gradientes rotatorios en el fondo
- 💫 Animaciones de entrada con Framer Motion
- 🎭 Efectos hover en tarjetas y botones
- 📜 Scroll reveal para elementos
- 🔮 Glassmorphism en componentes

## 🛣️ Rutas Disponibles

- `/` - Página de inicio (Hero)
- `/sobre-mi` - Información personal y formación
- `/habilidades` - Habilidades técnicas y blandas
- `/proyectos` - Portfolio de proyectos
- `/ofertas` - Servicios ofrecidos
- `/contacto` - Formulario de contacto

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `src/styles/base.css`:
```css
:root {
    --primary-cyan: #00fff7;
    --primary-blue: #0ea5e9;
    /* ... más variables */
}
```

### Agregar Nuevas Páginas
1. Crea un nuevo componente en `src/pages/`
2. Importa y agrega la ruta en `src/App.jsx`
3. Agrega el enlace en `src/components/Header.jsx`

### Modificar Animaciones
Las animaciones se configuran con Framer Motion. Ejemplo:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Contenido
</motion.div>
```

## 🚀 Despliegue

### Build para Producción
```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Opciones de Hosting
- **Vercel** - Recomendado para React
- **Netlify** - Fácil configuración
- **GitHub Pages** - Gratuito
- **Firebase Hosting** - Rápido y confiable

### Ejemplo con Vercel
```bash
npm install -g vercel
vercel
```

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto 5173 ocupado
El servidor usará automáticamente el siguiente puerto disponible (5174, 5175, etc.)

### Imágenes no se cargan
Verifica que las imágenes estén en la carpeta `public/` y que las rutas comiencen con `/`:
```jsx
<img src="/foto-perfil.jpg" alt="Perfil" />
```

### Estilos no se aplican
Asegúrate de que los archivos CSS estén en `src/styles/` y se importen en `src/main.jsx`

## 📚 Recursos

- [Documentación de React](https://react.dev/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📝 Notas Importantes

- Los archivos HTML originales están respaldados en `backup-html/`
- No edites archivos en `dist/` - se regeneran en cada build
- Las rutas en React usan `/ruta` en lugar de `ruta.html`
- El Hot Module Replacement (HMR) actualiza cambios sin recargar

## 🎓 Aprende Más

### Framer Motion - Ejemplos de Animaciones
```jsx
// Fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
/>

// Slide from left
<motion.div
  initial={{ x: -100 }}
  animate={{ x: 0 }}
/>

// Hover effect
<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
/>
```

## 👨‍💻 Autor

**Cristopher Valladares**
- Estudiante de Ingeniería en Sistemas
- Desarrollador Web Frontend
- Especializado en React y automatización IoT

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados © 2025 Cristopher Valladares.

---

¿Necesitas ayuda? Revisa la [guía de instalación](INSTALACION.md) o contacta al desarrollador.

**¡Disfruta tu nuevo portfolio con React! 🚀**
