## <h1 align="center">II. Backend</h1>
## 1. Entorno de Desarrollo

1.1. **[Instalar Visual Studio Code](#11-instalar-visual-studio-code)**
<br>1.2. **[Instalar Node.js](#12-instalar-nodejs)**
<br>1.3. **[Modificar Directivas en PowerShell](#13-modificar-directivas-en-powershell)**
<br>1.4. **[Instalar Postman](#14-instalar-postman)**
<br>

**<div align="center"><a href="../react_native.md">Menú React Native</a></div>**

---
## 1.1. Instalar Visual Studio Code
&nbsp;

#### 1.1.1. [Desacargar Visual Studio Code](https://code.visualstudio.com/download)

#### 1.1.2. Instalar Visual Studio Code. 

#### 1.1.3. Abrir Visual Studio Code

#### 1.1.4. Instalar extensiones en Visual Studio Code

```
Material Icon Theme
```
```
Windows Live Server
```

#### 1.1.5. Cerrar Visual Studio Code

**<div align="right"><a href="#ii-backend">Volver al Menú</a></div>**

---
## 1.2. Instalar Node.js
&nbsp;

#### 1.2.1. [Desacargar Node.js](https://nodejs.org/es/)

#### 1.2.2. Instalar Node.js

**<div align="right"><a href="#ii-backend">Volver al Menú</a></div>**

---
## 1.3. Modificar Directivas en PowerShell
&nbsp;

#### 1.3.1. Abrir PowerShell

#### 1.3.2. Verificar restricciones del 'npm'

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Ejecutar el siguiente comando en PowerShell para verificar la política de ejecución:

```powershell
Get-ExecutionPolicy
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Si aparece 'Restricted', hay que cambiarla a 'Unrestricted' de la siguiente forma:

```powershell
Set-ExecutionPolicy -Scope CurrentUser
```
&nbsp;&nbsp;&nbsp; cmdlet Set-ExecutionPolicy en la posición 1 de la canalización de comandos<br>
&nbsp;&nbsp;&nbsp; Proporcione valores para los parámetros siguientes:<br>
&nbsp;&nbsp;&nbsp; ExecutionPolicy: <ins>**Unrestricted**</ins><br>

#### 1.3.3. Verificar versiones 'node' y 'npm':

```bash
node --version # Debe mostrar v18.x.x o superior
```
```bash
npm --version # Debe mostrar v9.x.x o superior
```

**<div align="right"><a href="#ii-backend">Volver al Menú</a></div>**

---
## 1.4. Instalar Postman
&nbsp;

#### 1.4.1. [Desacargar Postman](https://www.postman.com/downloads/)

#### 1.4.2. Instalar Postman


**<div align="right"><a href="#ii-backend">Volver al Menú</a></div>**

---

<div align="right">
  <table border="0">
    <tr>      
      <td align="center"><a href="01_02_db_code.md">Codificación de la Base de Datos</a></td>
      <td align="center"><a href="../react_native.md">Menú Principal de React</a></td>
      <td align="center"><a href="02_02_backend_config.md">Configuración del Backend</a></td>
    </tr>
  </table>
</div>
<!-- ![Pantalla Principal Android](img/01_android_studio.png) -->