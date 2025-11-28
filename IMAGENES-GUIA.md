# 🖼️ GUÍA DE IMÁGENES - SOLUCIÓN RÁPIDA

## ⚠️ Problema: Las imágenes no cargan

Las imágenes deben estar en la carpeta `public/` para que Vite las sirva correctamente.

## ✅ Solución Rápida

### Ejecuta este comando:
```cmd
fix-images.bat
```

## 📁 Dónde Deben Estar las Imágenes

### Para React/Vite:
```
public/
├── foto-perfil.jpg                    ← Foto de perfil principal
├── foto-certificado.jpg               ← Certificado
├── assets/
│   └── images/
│       ├── logo-icon.jpg              ← Logo
│       ├── foto-certificado.jpg       ← Certificado
│       ├── certificado-ia.jpg         ← Certificado IA
│       └── otras-imagenes.jpg
```

## 🔧 Cómo Usar las Imágenes en React

### En Componentes:
```jsx
// Imagen en public/
<img src="/foto-perfil.jpg" alt="Perfil" />

// Imagen en public/assets/images/
<img src="/assets/images/logo-icon.jpg" alt="Logo" />
```

### ⚠️ IMPORTANTE:
- Las rutas empiezan con `/` (slash)
- NO uses `./` o rutas relativas
- NO uses `public/` en la ruta

## 📝 Imágenes Actuales

Tienes estas imágenes en `public/`:
- ✅ `foto-perfil.jpg`
- ✅ `foto-certificado.jpg`
- ✅ `4564a43e3a0113cb4cffe8fef56b3fc5.jpg`
- ✅ `Imagen de WhatsApp 2025-11-27 a las 17.01.24_674ae210.jpg`
- ✅ `Imagen de WhatsApp 2025-11-27 a las 20.51.29_a5315c18.jpg`

## 🎯 Rutas Correctas en el Código

### Hero.jsx:
```jsx
<img src="/foto-perfil.jpg" alt="Cristopher Valladares" />
```

### Header.jsx y Footer.jsx:
```jsx
<img src="/assets/images/logo-icon.jpg" alt="Logo" />
```

### About.jsx (Certificados):
```jsx
<img src="/assets/images/foto-certificado.jpg" alt="Certificado" />
<img src="/assets/images/certificado-ia.jpg" alt="Certificado IA" />
```

## 🚀 Después de Arreglar

1. Ejecuta: `fix-images.bat`
2. Ejecuta: `npm run dev`
3. Abre: http://localhost:5173
4. ✅ Las imágenes deberían cargar

## 🐛 Si Aún No Cargan

### Verifica en el navegador:
1. Abre DevTools (F12)
2. Ve a la pestaña "Network"
3. Recarga la página
4. Busca errores 404 en imágenes
5. Verifica la ruta exacta que está buscando

### Verifica las rutas:
```cmd
dir public\*.jpg
dir public\assets\images\*.jpg
```

## 💡 Tips

- Usa nombres simples sin espacios (ej: `logo.jpg` en vez de `Imagen de WhatsApp...jpg`)
- Mantén todas las imágenes en `public/`
- Las rutas siempre empiezan con `/`
- Reinicia el servidor después de agregar imágenes

---

**¡Ejecuta `fix-images.bat` y tus imágenes funcionarán! 🎉**
