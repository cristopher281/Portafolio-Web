@echo off
echo ========================================
echo   LIMPIEZA DE ARCHIVOS ANTIGUOS
echo ========================================
echo.

REM Crear carpeta de respaldo si no existe
if not exist "backup-html" mkdir "backup-html"

echo [1/3] Moviendo archivos HTML antiguos a backup-html...
move "contacto.html" "backup-html\" >nul 2>&1
move "habilidades.html" "backup-html\" >nul 2>&1
move "ofertas.html" "backup-html\" >nul 2>&1
move "proyectos.html" "backup-html\" >nul 2>&1
move "sobre-mi.html" "backup-html\" >nul 2>&1
echo ✓ Archivos HTML movidos

echo.
echo [2/3] Moviendo CSS antiguo a backup-html...
move "styles.css" "backup-html\" >nul 2>&1
echo ✓ CSS antiguo movido

echo.
echo [3/3] Moviendo carpeta assets antigua a backup-html...
if exist "assets" (
    xcopy "assets" "backup-html\assets\" /E /I /Y >nul 2>&1
    rmdir /s /q "assets" >nul 2>&1
)
echo ✓ Assets antiguos movidos

echo.
echo ========================================
echo   LIMPIEZA COMPLETADA
echo ========================================
echo.
echo Archivos movidos a: backup-html\
echo.
echo Estructura limpia:
echo   - src/           (Código React)
echo   - public/        (Archivos estáticos)
echo   - node_modules/  (Dependencias)
echo   - Archivos de configuración
echo.
pause
