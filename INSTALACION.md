# 🚀 Guía de Instalación - Portfolio React

## 📋 Requisitos Previos

- **Node.js** versión 18 o superior
- **npm** (viene incluido con Node.js)

Verifica tu versión:
```bash
node --version
npm --version
```

## 🔧 Instalación Paso a Paso

### 1️⃣ Instalar todas las dependencias

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Este comando instalará automáticamente todas las librerías necesarias:
- ✅ React 18.3.1
- ✅ React DOM 18.3.1
- ✅ React Router DOM 6.26.0 (navegación entre páginas)
- ✅ Framer Motion 11.5.4 (animaciones fluidas y efectos)
- ✅ React Icons 5.3.0 (iconos modernos)
- ✅ Vite 5.4.2 (bundler ultra rápido)

### 2️⃣ Iniciar el servidor de desarrollo

```bash
npm run dev
```

Esto abrirá automáticamente tu navegador en `http://localhost:5173`

### 3️⃣ Construir para producción

Cuando estés listo para publicar:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### 4️⃣ Previsualizar el build de producción

```bash
npm run preview
```

## 📦 Librerías Incluidas y Sus Funciones

### **Framer Motion** 🎨
Librería de animaciones para React con efectos increíbles:
- Animaciones de entrada/salida suaves
- Transiciones de página fluidas
- Efectos parallax y scroll
- Gestos y drag & drop
- Animaciones de layout automáticas

### **React Router DOM** 🛣️
Navegación entre páginas sin recargar:
- Rutas dinámicas
- Navegación instantánea
- URLs limpias
- Historial del navegador

### **React Icons** 🎯
Miles de iconos de diferentes packs:
- Font Awesome
- Material Design
- Bootstrap Icons
- Y muchos más

### **Vite** ⚡
Bundler ultra rápido:
- Hot Module Replacement (HMR) instantáneo
- Build optimizado
- Soporte para ES modules
- Desarrollo ultra rápido

## 🎯 Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala todas las dependencias |
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye para producción |
| `npm run preview` | Previsualiza el build |

## 🐛 Solución de Problemas

### Error: "npm no se reconoce como comando"
- Instala Node.js desde: https://nodejs.org/

### Error al instalar dependencias
```bash
# Limpia la caché de npm
npm cache clean --force

# Elimina node_modules y package-lock.json
rm -rf node_modules package-lock.json

# Vuelve a instalar
npm install
```

### Puerto 5173 ya está en uso
```bash
# El servidor usará automáticamente el siguiente puerto disponible
# O puedes especificar uno diferente en vite.config.js
```

## 📁 Estructura del Proyecto

```
Portafolio-Web/
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas principales
│   ├── hooks/          # Custom hooks
│   ├── styles/         # Archivos CSS
│   ├── assets/         # Imágenes y recursos
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── public/             # Archivos estáticos
├── index.html          # HTML base
├── package.json        # Dependencias
└── vite.config.js      # Configuración de Vite
```

## 🎨 Mejoras Futuristas Incluidas

- ✨ Animaciones de entrada con Framer Motion
- 🌊 Efectos parallax en scroll
- 💫 Transiciones de página suaves
- 🎭 Efectos hover avanzados
- 🌈 Gradientes animados
- ⚡ Partículas flotantes mejoradas
- 🔮 Efectos de glassmorphism
- 🌟 Brillos y resplandores neón

## 📞 ¿Necesitas Ayuda?

Si encuentras algún problema durante la instalación, verifica:
1. Que Node.js esté instalado correctamente
2. Que estés en la carpeta correcta del proyecto
3. Que tengas conexión a internet para descargar las dependencias

¡Listo! Tu portfolio futurista con React está configurado. 🚀
