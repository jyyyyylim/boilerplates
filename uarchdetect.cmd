@echo off
::if sysvar architecture not X86 assume its x64 else its x32
echo detecting uarch...

if not "%PROCESSOR_ARCHITECTURE%" EQU "X86" (
    set "detect=x64"
) else (
    set "detect=x32"
)

echo: & echo %detect% is your architecture
pause