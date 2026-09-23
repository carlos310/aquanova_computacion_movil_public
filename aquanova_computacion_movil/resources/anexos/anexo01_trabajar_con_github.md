## ANEXO 01: Trabajar con GitHub

1. [Instalar Git](#1-instalar-git)
2. [Subir el proyecto a un repositorio 'Github'](#2-subir-el-proyecto-a-un-repositorio-github)
3. [Clonar un Proyecto 'Github'](#3-clonar-un-proyecto-github)

---
&nbsp;
## 1. Instalar Git
&nbsp;

1. Descargar [Git](https://git-scm.com/downloads).

2. Instalar Git, siguiendo los pasos del instalador.

<div align="right"><a href="#anexo-01-trabajar-con-github">Volver al Menú</a></div>

---
&nbsp;
## 2. Subir el proyecto a un repositorio 'Github'
&nbsp;

Para evitar confusiones y seguir los pasos correctamente, la carpeta raíz del proyecto se llamará 'proyecto'.

1. Verificar que no haya una cuenta de 'Github' asociada al computador, para ello, debe abrir el 'Panel de Control', dar click en 'Cuentas de usuario / Administrar credenciales de Windows'. Si hay una cuenta asociada (Ver imagen), dar click sobre la cuenta y sobre la opción 'Quitar'. 

![Pantalla Principal Android](../02_hibrido_/react_native/steps/img/github/01_github.png)

NOTA:
De no funcionar este método porque no tiene acceso al Panel de control, pruebe abriendo el 'Windows PowerShell' y digite el siguiente comando:
      
```powershell
echo "protocol=https`nhost=github.com`n" | git credential-manager erase
```

2. Crear una carpeta en su computador con el nombre 'proyecto'. Verificar que tenga por lo menos un archivo, ya que Github no guarda carpetas, solo archivos.

3. Crear una cuenta en [Github](https://github.com/signup?source=login).

4. Estando en su cuenta de 'Github', en la parte superior derecha dar click al 'Nombre de su cuenta / Your Repositories'. Dar click en 'New'. En el control de texto 'Repository name', escribir el nombre de la carpeta raíz de su proyecto (ejemplo, 'proyecto'. La carpeta raíz no debe tener espacios, ni caracteres compuesto, ni caracteres especiales) y dar click en 'Create Repository'.

5. Click derecho sobre la carpeta raíz (ejemplo, 'proyecto') y seleccionar la opción 'Open Git Bash here'.

6. En el 'Git Bash' escribir lo siguiente:

```bash
git config --global user.name "nombre de su cuenta"  # Nombre con el que creò su cuenta en 'Github'.
```
```bash
git config --global user.email "correo de su cuenta" # Correo con el que registró su cuenta en 'Github'.
```
```bash
git init
```
```bash
git branch -M main
```
```bash
git remote add origin 'enlace al repositorio' # Lo puede copiar del repositorio que está creando en 'Github'.
```
```bash
git add .
```
```bash
git commit -m "Subiendo Proyecto"
```
```bash
git push -u origin main
```

7. Va a aparecer una ventana denominada 'Connect to Github', dar click en la opción 'Sign in with your browser', dar click en 'Authentication Succeeded'. Verificar que se haya abierto en el navegador en donde tiene la cuenta activa, de lo contrario hay que escribir nuevamente las credenciales de 'Github'. En el 'Git Bash' debe aparecer texto similar al siguiente:

```
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 226 bytes | 226.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/SenaProfeAlbeiro/proyecto.git
* [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

8. Actualizar la ventana del navegador donde se encuentra abierta su cuenta de 'Github'


9. Para actualizar la información del proyecto en 'Github' (Cuando haya realizado cualquier cambio en los archivos o el código), en el 'Git bash' escribir los siguientes comandos:

```bash
git add .
```
```bash
git commit -m "Comentario del cambio"
```
```bash
git push 
```

<div align="right"><a href="#anexo-01-trabajar-con-github">Volver al Menú</a></div>

---
&nbsp;
## 3. Clonar un Proyecto 'Github'
&nbsp;

1. Abrir su cuenta de 'Github' y en la parte superior derecha, dar click al 'Nombre de su cuenta / Your Repositories'. 

2. Dar click al proyecto que desea clonar, en el caso del ejemplo es 'proyecto'.

3. Dar click en la opción '<> Code / Copy url to clipboard'.

4. En alguna parte de su computador dar click derecho sobre el área de trabajo y seleccionar la opción 'Open Git Bash here'.

6. En el 'Git Bash' pegar el repositorio clonado de 'Github' con 'CTRL + INSERT', quedando como sigue:

```bash
git clone 'pegar el enlace del repositorio de Github'
```
NOTA:
Si el proyecto ya se encuentra en el computador, puede utilizar el siguiente comando para actualizar la información:
				
```bash
git pull
```

7. Abrir el proyecto en Visual Studio Code.


<div align="right"><a href="#anexo-01-trabajar-con-github">Volver al Menú</a></div>


---

<div align="right">
  <table border="0">
    <tr>      
      <td align="right">Anexo 02. <a href="anexo02_problemas_con_puertos_en_xampp.md">Problemas con Puertos en Xampp</a></td>
    </tr>
  </table>
</div>

<!-- ![Pantalla Principal Android](img/01_android_studio.png) -->