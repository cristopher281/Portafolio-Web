# 🧹 Estructura Limpia del Proyecto

## 📁 Estructura Final Recomendada

```
Portafolio-Web/
├── 📂 public/                    # Archivos estáticos
│   ├── assets/
│   │   └── images/              # Imágenes públicas
│   ├── foto-perfil.jpg
│   └── *.jpg
│
├── 📂 src/                       # Código fuente React
│   ├── 📂 components/           # Componentes reutilizables
│   │   ├── AnimatedBackground.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Hero.jsx
│   │
│   ├── 📂 pages/                # Páginas de la aplicación
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Offers.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   │
│   ├── 📂 hooks/                # Custom hooks
│   │   ├── useNavigation.js
│   │   └── useScrollReveal.js
│   │
│   ├── 📂 styles/               # Estilos CSS
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   └── pages.css
│   │
│   ├── App.jsx                  # Componente raíz
│   └── main.jsx                 # Punto de entrada
│
├── 📂 backup-html/              # Archivos HTML antiguos (respaldo)
│   ├── *.html
│   ├── styles.css
│   └── assets/
│
├── 📂 node_modules/             # Dependencias (generado)
│
├── 📄 .gitignore                # Archivos ignorados por Git
├── 📄 index.html                # HTML base para Vite
├── 📄 package.json              # Dependencias del proyecto
├── 📄 package-lock.json         # Lock de dependencias
├── 📄 vite.config.js            # Configuración de Vite
│
├── 📄 setup.bat                 # Script de configuración inicial
├── 📄 cleanup.bat               # Script de limpieza
│
└── 📄 Documentación/
    ├── README.md                # Documentación principal
    ├── INSTALACION.md           # Guía de instalación
    ├── INICIO-RAPIDO.md         # Inicio rápido
    ├── CHECKLIST.md             # Lista de verificación
    └── COMANDOS.md              # Referencia de comandos
```

---

## 🗑️ Archivos a Eliminar/Mover

### Archivos HTML Antiguos (Mover a backup-html/)
- ❌ `contacto.html`
- ❌ `habilidades.html`
- ❌ `ofertas.html`
- ❌ `proyectos.html`
- ❌ `sobre-mi.html`

### CSS Antiguo (Mover a backup-html/)
- ❌ `styles.css` (raíz)

### Carpeta Assets Antigua (Mover a backup-html/)
- ❌ `assets/` (raíz) - Ya está copiada a `src/` y `public/`

---

## ✅ Archivos a Mantener

### Configuración
- ✅ `package.json`
- ✅ `package-lock.json`
- ✅ `vite.config.js`
- ✅ `.gitignore`
- ✅ `index.html` (Vite)

### Scripts
- ✅ `setup.bat`
- ✅ `cleanup.bat`

### Documentación
- ✅ `README.md`
- ✅ `INSTALACION.md`
- ✅ `INICIO-RAPIDO.md`
- ✅ `CHECKLIST.md`
- ✅ `COMANDOS.md`

### Imágenes (Raíz - Mover a public/)
- ✅ `foto-perfil.jpg`
- ✅ `foto-certificado.jpg`
- ✅ Otras imágenes `.jpg`

### Carpetas
- ✅ `src/` - Código React
- ✅ `public/` - Archivos estáticos
- ✅ `node_modules/` - Dependencias
- ✅ `backup-html/` - Respaldo

---

## 🚀 Cómo Limpiar el Proyecto

### Opción 1: Script Automático (Recomendado)
```cmd
cleanup.bat
```

### Opción 2: Manual
```cmd
REM Crear carpeta de respaldo
mkdir backup-html

REM Mover archivos HTML
move *.html backup-html\
move index.html .

REM Mover CSS antiguo
move styles.css backup-html\

REM Mover assets antiguos
xcopy assets backup-html\assets\ /E /I /Y
rmdir /s /q assets
```

---

## 📊 Antes vs Después

### Antes (Desordenado)
```
Portafolio-Web/
├── contacto.html
├── habilidades.html
├── ofertas.html
├── proyectos.html
├── sobre-mi.html
├── styles.css
├── assets/
├── src/
├── public/
└── ... (mezclado)
```

### Después (Limpio)
```
Portafolio-Web/
├── src/              ← Todo el código React
├── public/           ← Archivos estáticos
├── backup-html/      ← Archivos antiguos
├── node_modules/     ← Dependencias
└── Configuración     ← Solo archivos necesarios
```

---

## 🎯 Beneficios de la Estructura Limpia

1. **Organización Clara**
   - Código React en `src/`
   - Archivos estáticos en `public/`
   - Respaldos en `backup-html/`

2. **Fácil Mantenimiento**
   - Todo está en su lugar
   - Fácil encontrar archivos
   - Sin duplicados

3. **Mejor Performance**
   - Solo archivos necesarios
   - Build más rápido
   - Menos confusión

4. **Profesional**
   - Estructura estándar de React
   - Fácil para otros desarrolladores
   - Listo para producción

---

## ⚠️ Importante

- **NO elimines** `backup-html/` - Contiene tus archivos originales
- **NO elimines** `node_modules/` - Contiene las dependencias
- **NO elimines** archivos de configuración (package.json, vite.config.js)

---

## 🔄 Después de Limpiar

Ejecuta para verificar que todo funciona:
```cmd
npm run dev
```

Si algo falla, puedes restaurar desde `backup-html/`

---

**¡Estructura limpia y profesional lista! 🎉**
