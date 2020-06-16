::lovingly abuses the envvar PROCESSOR_ARCHITECTURE that is innate in probably all windows installations
::only 5 possible values: IA64, AMD64, ARM64, EM64T(presumably depreciated) and x86. only the latter indicates a 32bit device
::operating on this assumption, any value outside of x86 is considered a 32bit system

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
