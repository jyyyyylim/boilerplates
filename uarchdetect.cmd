@echo off
chcp 65001
::codepage utf8 to prevent sperging due to unicode char
::if sysvar architecture not X86 assume its x64 else its x32
echo detecting μarch... 

if not "%PROCESSOR_ARCHITECTURE%" EQU "X86" (
    set "detect=x64"
) else (
    set "detect=x32"
)

echo: & echo your pc is %PROCESSOR_ARCHITECTURE%, a %detect%-based device 
pause
