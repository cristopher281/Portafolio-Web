# 🎯 TODOS LOS COMANDOS - COPIA Y PEGA

## ⚡ OPCIÓN 1: INSTALACIÓN AUTOMÁTICA (RECOMENDADA)

```cmd
setup.bat
npm install
npm run dev
```

**¡Eso es todo! Tu portfolio estará en http://localhost:5173** 🚀

---

## 🔧 OPCIÓN 2: INSTALACIÓN MANUAL

### Crear Carpetas
```cmd
mkdir src\styles
mkdir src\assets\images
mkdir public\assets\images
```

### Copiar CSS
```cmd
copy assets\css\base.css src\styles\base.css
copy assets\css\components.css src\styles\components.css
copy assets\css\layout.css src\styles\layout.css
copy assets\css\pages.css src\styles\pages.css
```

### Copiar Imágenes
```cmd
xcopy *.jpg public\ /Y
xcopy assets\images\*.* public\assets\images\ /E /I /Y
```

### Instalar y Ejecutar
```cmd
npm install
npm run dev
```

---

## 📦 COMANDOS DE DESARROLLO

```cmd
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Limpiar caché de npm
npm cache clean --force

# Reinstalar dependencias
del package-lock.json
npm install
```

---

## 🐛 COMANDOS DE SOLUCIÓN DE PROBLEMAS

### Si npm no funciona
```cmd
# Verifica instalación
node --version
npm --version

# Si no están instalados, descarga Node.js de:
# https://nodejs.org/
```

### Si hay errores de instalación
```cmd
npm cache clean --force
del package-lock.json
del /s /q node_modules
npm install
```

### Si el puerto está ocupado
```cmd
# Vite usará automáticamente el siguiente puerto disponible
# No necesitas hacer nada
```

---

## 📂 COMANDOS DE NAVEGACIÓN

```cmd
# Ver archivos en carpeta actual
dir

# Ir a la carpeta del proyecto
cd "c:\Users\DELL\OneDrive\Escritorio\portafolio cv\Portafolio-Web"

# Ver contenido de src
dir src

# Ver contenido de public
dir public
```

---

## 🎨 ARCHIVOS PARA EDITAR

### Cambiar Colores
```cmd
notepad src\styles\base.css
```
Busca `:root` y modifica las variables de color.

### Editar Página de Inicio
```cmd
notepad src\pages\Home.jsx
```

### Editar Sobre Mí
```cmd
notepad src\pages\About.jsx
```

### Editar Header/Navegación
```cmd
notepad src\components\Header.jsx
```

---

## 🚀 COMANDOS DE DESPLIEGUE

### Build Local
```cmd
npm run build
```
Los archivos estarán en la carpeta `dist/`

### Vercel (Hosting Gratuito)
```cmd
npm install -g vercel
vercel
```

### Netlify (Hosting Gratuito)
```cmd
npm install -g netlify-cli
netlify deploy
```

---

## 📊 COMANDOS DE INFORMACIÓN

```cmd
# Ver versión de Node.js
node --version

# Ver versión de npm
npm --version

# Ver dependencias instaladas
npm list --depth=0

# Ver información del proyecto
npm info

# Ver scripts disponibles
npm run
```

---

## 🔍 VERIFICACIÓN POST-INSTALACIÓN

```cmd
# 1. Verifica que las carpetas existan
dir src\styles
dir src\assets\images
dir public\assets\images

# 2. Verifica que los archivos CSS estén copiados
dir src\styles\*.css

# 3. Verifica que las imágenes estén copiadas
dir public\*.jpg
dir public\assets\images

# 4. Verifica que node_modules exista
dir node_modules

# 5. Inicia el servidor
npm run dev
```

---

## ⌨️ ATAJOS DE TECLADO EN LA TERMINAL

```
Ctrl + C          = Detener servidor
Ctrl + L          = Limpiar pantalla
↑ (Flecha arriba) = Comando anterior
Tab               = Autocompletar
```

---

## 📝 COMANDOS DE GIT (OPCIONAL)

```cmd
# Inicializar repositorio
git init

# Agregar archivos
git add .

# Hacer commit
git commit -m "Migración a React completada"

# Conectar con GitHub
git remote add origin https://github.com/tu-usuario/tu-repo.git

# Subir cambios
git push -u origin main
```

---

## 🎯 SECUENCIA COMPLETA DE COMANDOS

### Primera Vez (Instalación)
```cmd
setup.bat
npm install
npm run dev
```

### Días Siguientes (Solo Desarrollo)
```cmd
npm run dev
```

### Cuando Termines de Trabajar
```cmd
Ctrl + C
```

### Para Publicar
```cmd
npm run build
```

---

## 💡 TIPS

- **Siempre** ejecuta `npm run dev` desde la carpeta del proyecto
- **Nunca** edites archivos en `dist/` o `node_modules/`
- **Guarda** tus cambios antes de hacer `Ctrl + C`
- **Usa** `Ctrl + C` para detener el servidor antes de cerrar la terminal

---

## 🎉 COMANDO FINAL

```cmd
npm run dev
```

**Abre tu navegador en:** http://localhost:5173

**¡Disfruta tu portfolio React! 🚀**
