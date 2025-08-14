@echo off
title Conectar ao banco Winove (Plesk)
echo.
echo 🔄 Testando conexão com o servidor...
ping 150.230.81.36 -n 2 > nul

IF ERRORLEVEL 1 (
    echo ❌ Não foi possível alcançar o host 150.230.81.36.
    pause
    exit /b
)

echo ✅ Host acessível. Iniciando MySQL...
echo ----------------------------------------
mysql -h 150.230.81.36 -P 3306 -u fernandowinove -p
