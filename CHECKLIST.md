# ✅ CHECKLIST DE INSTALACIÓN

## 📋 Antes de Empezar

- [ ] Tengo Node.js instalado (versión 18+)
- [ ] Tengo npm instalado
- [ ] Estoy en la carpeta del proyecto en la terminal

**Verificar versiones:**
```cmd
node --version
npm --version
```

---

## 🚀 PASO A PASO

### ✅ PASO 1: Configurar Archivos (1 minuto)

```cmd
setup.bat
```

**¿Qué hace esto?**
- ✅ Crea carpetas `src/styles`, `src/assets/images`, `public/assets/images`
- ✅ Copia archivos CSS a `src/styles/`
- ✅ Copia imágenes a `public/`
- ✅ Crea respaldo de HTML en `backup-html/`

**Resultado esperado:**
```
✓ Carpetas creadas
✓ Archivos CSS copiados
✓ Imágenes copiadas
✓ Respaldo creado
```

---

### ✅ PASO 2: Instalar Dependencias (2-3 minutos)

```cmd
npm install
```

**¿Qué instala?**
- React 18.3.1
- React DOM 18.3.1
- React Router DOM 6.26.0
- Framer Motion 11.5.4
- React Icons 5.3.0
- Vite 5.4.2

**Resultado esperado:**
```
added XXX packages in XXs
```

---

### ✅ PASO 3: Iniciar Servidor (Instantáneo)

```cmd
npm run dev
```

**Resultado esperado:**
```
VITE v5.4.2  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

**Tu portfolio estará en:** http://localhost:5173

---

## 🎉 ¡LISTO! Tu Portfolio React Está Funcionando

### Verifica que todo funcione:

- [ ] La página carga en http://localhost:5173
- [ ] Puedes navegar entre páginas
- [ ] Las animaciones funcionan
- [ ] El menú móvil abre y cierra
- [ ] Las imágenes se cargan correctamente

---

## 🐛 Si Algo Sale Mal

### Problema: "npm no se reconoce"
**Solución:** Instala Node.js desde https://nodejs.org/

### Problema: Error al ejecutar setup.bat
**Solución:** Ejecuta los comandos manualmente:
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
```

### Problema: Error al instalar dependencias
**Solución:**
```cmd
npm cache clean --force
del package-lock.json
npm install
```

### Problema: Puerto 5173 ocupado
**Solución:** Vite usará automáticamente el siguiente puerto (5174, 5175, etc.)

### Problema: Imágenes no se cargan
**Solución:** Verifica que las imágenes estén en `public/` y que las rutas empiecen con `/`

---

## 📝 Comandos Útiles

```cmd
# Iniciar desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview

# Detener servidor
Ctrl + C
```

---

## 🎨 Archivos Importantes

| Archivo | Para qué sirve |
|---------|---------------|
| `src/App.jsx` | Configuración de rutas |
| `src/pages/` | Contenido de cada página |
| `src/components/` | Componentes reutilizables |
| `src/styles/` | Estilos CSS |
| `public/` | Imágenes y archivos estáticos |

---

## 🔥 Características Incluidas

✅ **Animaciones Framer Motion**
- Transiciones de página suaves
- Efectos hover en tarjetas
- Scroll reveal automático
- Staggered animations

✅ **Diseño Futurista**
- Tema oscuro con gradientes cyan/purple
- Partículas flotantes animadas
- Glassmorphism en componentes
- Sombras con glow

✅ **Navegación React Router**
- Sin recargas de página
- URLs limpias
- Historial del navegador

✅ **Responsive Design**
- Funciona en móvil, tablet y desktop
- Menú hamburguesa en móvil
- Breakpoints optimizados

---

## 🎯 Próximos Pasos

1. **Personaliza el contenido:**
   - Edita archivos en `src/pages/`
   - Actualiza información personal
   - Agrega tus proyectos reales

2. **Cambia los colores:**
   - Abre `src/styles/base.css`
   - Modifica las variables CSS en `:root`

3. **Agrega más páginas:**
   - Crea nuevo archivo en `src/pages/`
   - Agrega ruta en `src/App.jsx`
   - Agrega link en `src/components/Header.jsx`

4. **Despliega tu portfolio:**
   ```cmd
   npm run build
   ```
   Sube la carpeta `dist/` a Vercel, Netlify, o GitHub Pages

---

## 📚 Documentación

- **README.md** - Documentación completa
- **INSTALACION.md** - Guía detallada de instalación
- **INICIO-RAPIDO.md** - Comandos esenciales
- **walkthrough.md** - Resumen de la migración

---

## ✨ ¡Disfruta tu Portfolio React!

Si tienes dudas, revisa la documentación o los archivos de ejemplo.

**¡Éxito con tu portfolio! 🚀**
