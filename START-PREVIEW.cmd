@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required to run this local preview.
  echo Install Node.js, then open this file again.
  pause
  exit /b 1
)
if not exist "node_modules\vite\bin\vite.js" (
  echo Preparing the local preview...
  call npm.cmd ci --no-audit --no-fund
  if errorlevel 1 (
    echo Setup could not finish. Check your internet connection and try again.
    pause
    exit /b 1
  )
)
echo Opening Mohammed Samir Portfolio. Keep this window open while reviewing.
call npm.cmd run dev -- --host 127.0.0.1 --port 5184 --open
