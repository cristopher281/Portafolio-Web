# 🧹 GUÍA DE LIMPIEZA RÁPIDA

## ⚡ Ejecuta Este Comando:

```cmd
cleanup.bat
```

## 🗑️ Qué Se Moverá a `backup-html/`:

### Archivos HTML Antiguos
- ❌ contacto.html
- ❌ habilidades.html
- ❌ ofertas.html
- ❌ proyectos.html
- ❌ sobre-mi.html

### CSS Antiguo
- ❌ styles.css (de la raíz)

### Assets Antiguos
- ❌ carpeta assets/ (ya está en src/ y public/)

---

## ✅ Estructura Final:

```
Portafolio-Web/
├── src/              ← Tu código React
├── public/           ← Imágenes y archivos estáticos
├── backup-html/      ← Archivos antiguos (respaldo seguro)
├── node_modules/     ← Dependencias
├── index.html        ← HTML base de Vite
├── package.json      ← Configuración
├── vite.config.js    ← Configuración de Vite
└── *.md              ← Documentación
```

---

## 🎯 Resultado:

**ANTES:** 23 archivos mezclados ❌  
**DESPUÉS:** Estructura limpia y modular ✅

---

## ⚠️ Seguridad:

- ✅ Todos los archivos antiguos se **MUEVEN** (no se eliminan)
- ✅ Puedes restaurarlos desde `backup-html/`
- ✅ Tu código React no se toca

---

## 🚀 Después de Limpiar:

```cmd
npm run dev
```

¡Tu portfolio seguirá funcionando perfectamente! 🎉
