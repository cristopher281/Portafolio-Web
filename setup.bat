@echo off
echo ========================================
echo   CONFIGURACION DEL PROYECTO REACT
echo ========================================
echo.

REM Crear carpetas necesarias
echo [1/5] Creando estructura de carpetas...
if not exist "src\styles" mkdir "src\styles"
if not exist "src\assets\images" mkdir "src\assets\images"
if not exist "public\assets\images" mkdir "public\assets\images"
echo ✓ Carpetas creadas

REM Copiar archivos CSS
echo.
echo [2/5] Copiando archivos CSS...
copy "assets\css\base.css" "src\styles\base.css" >nul
copy "assets\css\components.css" "src\styles\components.css" >nul
copy "assets\css\layout.css" "src\styles\layout.css" >nul
copy "assets\css\pages.css" "src\styles\pages.css" >nul
echo ✓ Archivos CSS copiados

REM Copiar imágenes a public
echo.
echo [3/5] Copiando imágenes a public...
xcopy "*.jpg" "public\" /Y >nul 2>&1
xcopy "assets\images\*.*" "public\assets\images\" /E /I /Y >nul 2>&1
echo ✓ Imágenes copiadas

REM Crear carpeta de respaldo
echo.
echo [4/5] Creando respaldo de archivos HTML...
if not exist "backup-html" mkdir "backup-html"
copy "*.html" "backup-html\" >nul 2>&1
echo ✓ Respaldo creado en carpeta backup-html

echo.
echo [5/5] Configuración completada!
echo.
echo ========================================
echo   SIGUIENTE PASO: INSTALAR DEPENDENCIAS
echo ========================================
echo.
echo Ejecuta el siguiente comando:
echo   npm install
echo.
echo Luego inicia el servidor de desarrollo:
echo   npm run dev
echo.
pause
