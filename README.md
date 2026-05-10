# Allergy Pal - Guía de Despliegue Limpio

Si has tenido el error de los 100MB en GitHub, sigue estos pasos exactos. El problema es que tu historial de Git está "sucio" con archivos pesados de `node_modules`.

## PASO 1: Borrar el historial corrupto
Abre la terminal en tu carpeta `app_allergypal` y ejecuta este comando para que Git "olvide" los archivos pesados:
```bash
rd /s /q .git
```
*(Nota: Si usas PowerShell y falla, usa `rm -Recurse -Force .git`)*

## PASO 2: Iniciar y configurar correctamente
1. Asegúrate de tener el archivo llamado exactamente `.gitignore` en la carpeta raíz.
2. Ejecuta estos comandos en orden:
```bash
# 1. Inicia un repositorio nuevo y limpio
git init -b main

# 2. Añade los archivos (Ahora Git usará el .gitignore e ignorará lo pesado)
git add .

# 3. Guarda los cambios localmente
git commit -m "Subida limpia sin archivos pesados"
```

## PASO 3: Subir a GitHub (El paso final)
Reemplaza la URL con la de tu repositorio:
```bash
git remote add origin https://github.com/jlaa21/app_allergypal.git
git push -u origin main --force
```

---

## ¿Por qué esto funciona?
Al borrar la carpeta `.git`, eliminamos el rastro del archivo de 147MB que GitHub está bloqueando. Al empezar de cero con el archivo `.gitignore` correcto, Git solo verá tus archivos de código (que pesan muy poco) y la subida será instantánea.

### El comando "mágico" si algo sale mal:
Si por error ves que `node_modules` se ha incluido de nuevo, antes de hacer el push ejecuta:
`git rm -r --cached node_modules`
