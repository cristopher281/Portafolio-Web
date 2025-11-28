# ⚡ INICIO RÁPIDO - 3 PASOS

## 🎯 Comandos para Copiar y Pegar

### PASO 1: Configurar Archivos
```cmd
setup.bat
```

### PASO 2: Instalar Dependencias
```cmd
npm install
```

### PASO 3: Iniciar Servidor
```cmd
npm run dev
```

## ✅ ¡Listo!
Tu portfolio estará disponible en: **http://localhost:5173**

---

## 📝 Si el script setup.bat no funciona, ejecuta estos comandos manualmente:

```cmd
mkdir src\styles
mkdir src\assets\images  
mkdir public\assets\images

copy assets\css\base.css src\styles\
copy assets\css\components.css src\styles\
copy assets\css\layout.css src\styles\
copy assets\css\pages.css src\styles\

xcopy *.jpg public\ /Y
xcopy assets\images\*.* public\assets\images\ /E /I /Y

npm install
npm run dev
```

---

## 🎨 Librerías Incluidas

✅ **React 18** - Framework UI moderno  
✅ **Vite** - Bundler ultra rápido  
✅ **Framer Motion** - Animaciones profesionales  
✅ **React Router** - Navegación entre páginas  
✅ **React Icons** - Miles de iconos  

---

## 🚀 Comandos Útiles

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Inicia desarrollo |
| `npm run build` | Construye para producción |
| `npm run preview` | Previsualiza build |

---

## 🐛 ¿Problemas?

**Error al instalar:**
```cmd
npm cache clean --force
npm install
```

**Puerto ocupado:**
Vite usará automáticamente el siguiente puerto disponible (5174, 5175, etc.)

---

## 📂 Estructura Creada

```
src/
├── components/    # Header, Footer, Hero, Card, etc.
├── pages/         # Home, About, Skills, Projects, etc.
├── hooks/         # useScrollReveal, useNavigation
├── styles/        # CSS copiado de assets/css/
└── assets/        # Imágenes

public/
├── assets/images/ # Imágenes públicas
└── *.jpg          # Fotos de perfil
```

---

## 💡 Características Futuristas

🌟 Partículas flotantes animadas  
💫 Transiciones de página suaves  
🎭 Efectos hover en 3D  
🌈 Gradientes animados  
⚡ Scroll reveal automático  
🔮 Glassmorphism en tarjetas  

---

**¿Listo para empezar?** Ejecuta `setup.bat` y luego `npm install` 🚀
