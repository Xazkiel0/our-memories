@echo off
setlocal enabledelayedexpansion

set "suffix=nut-"
set /a index=1

REM Ganti ke direktori target
cd /d "F:\Web\our-memories\public\gundut"

for %%f in (*.*) do (
    set "filename=%%~nf"
    set "ext=%%~xf"
    ren "%%f" "!%suffix%!!index!!ext!"
    set /a index+=1
)

echo Rename selesai.
