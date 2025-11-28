@echo off
echo ========================================
echo   ARREGLAR IMAGENES - COPIAR A PUBLIC
echo ========================================
echo.

echo [1/3] Creando carpetas necesarias...
if not exist "public" mkdir "public"
if not exist "public\assets" mkdir "public\assets"
if not exist "public\assets\images" mkdir "public\assets\images"
echo ✓ Carpetas creadas

echo.
echo [2/3] Copiando imagenes JPG a public...
copy "*.jpg" "public\" /Y >nul 2>&1
echo ✓ Imagenes copiadas a public\

echo.
echo [3/3] Copiando imagenes de assets a public\assets\images...
if exist "assets\images" (
    xcopy "assets\images\*.*" "public\assets\images\" /E /I /Y >nul 2>&1
    echo ✓ Imagenes de assets copiadas
) else (
    echo ⚠ No existe assets\images (normal si ya se limpió)
)

echo.
echo ========================================
echo   IMAGENES LISTAS
echo ========================================
echo.
echo Imagenes disponibles en:
echo   - public\*.jpg
echo   - public\assets\images\*.*
echo.
echo Ahora ejecuta: npm run dev
echo.
pause
