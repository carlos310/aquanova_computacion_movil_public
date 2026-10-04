## <h1 align="center">III. Frontend Móvil</h1>
## 1. Entorno de Desarrollo

1.1. **[Instalar Visual Studio Code](#11-instalar-visual-studio-code)**
<br>1.2. **[Instalar Node.js](#12-instalar-nodejs)**
<br>1.3. **[Modificar Directivas en PowerShell](#13-modificar-directivas-en-powershell)**
<br>1.4. **[Instalar Android Studio](#14-instalar-android-studio)**
<br>1.5. **[Crear el Emulador de Android Studio](#15-crear-el-emulador-de-android-studio)**
<br>1.6. **[Configurar las variables de Entorno del Sistema](#16-configurar-las-variables-de-entorno-del-sistema)**
<br>1.7. **[Instalar Expo Go en el Celular](#17-instalar-expo-go-en-el-celular)**

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
ES7 React/Redux/React-Native snippets
```
```
Simple React Snippets
```
```
Auto Close Tag
```
```
Paste JSON as Code
```
```
TypeScript importerM
```

#### 1.1.5. Cerrar Visual Studio Code

**<div align="right"><a href="#punto-1-entorno-de-desarrollo">Volver al Menú</a></div>**

---
## 1.2. Instalar Node.js
&nbsp;

#### 1.2.1. [Desacargar Node.js](https://nodejs.org/es/)

#### 1.2.2. Instalar Node.js

**<div align="right"><a href="#punto-1-entorno-de-desarrollo">Volver al Menú</a></div>**

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

**<div align="right"><a href="#punto-1-entorno-de-desarrollo">Volver al Menú</a></div>**

---
## 1.4. Instalar Android Studio
&nbsp;

#### 1.4.1. [Desacargar Android Studio](https://developer.android.com/studio?hl=es-419)

#### 1.4.2. Instalar Android Studio

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; 'Next' / ✅ 'Android Virtual Device' - 'Next' / ✅ 'Standard' - 'Next' / 'Next' / ✅ 'Accept' - 'Next' / 'Install' / 'Finish'.


### Nota:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Si la instalación no sale como se espera porque hay una versión de Android Studio instalada, revise el siguiente enlace para 
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; desinstalarlo totalmente y repita los pasos 4.1 y 4.2: [Desinstalar completamente Android Studio](https://blog.buhoos.com/como-desinstalar-completamente-android-studio-de-windows-10/)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; En caso que los archivos y/o carpetas no se dejen eliminar, descargue el siguiente programa para eliminar carpetas
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; o archivos: [iobit-unlocker](https://www.iobit.com/es/iobit-unlocker.php#)

**<div align="right"><a href="#punto-1-entorno-de-desarrollo">Volver al Menú</a></div>**

---
## 1.5. Crear el Emulador de Android Studio
&nbsp;

#### 1.5.1. Seleccionar 'More Actions / Virtual Device Manager'

#### 1.5.2. Seleccionar la opción '(+) Create Virtual Device'.

#### 1.5.3. Seleccionar un Emulador, por ejemplo, 'Pixel 6a' (Con el icono de Play Store)  / 'Next'.

#### 1.5.4. 'Next' / 'API 33 "Tiramisu"; Android 13.0' / Google Play Intel x86_64 Atom System Image.

#### 1.5.5. 'Finish' / 'Yes' / 'Finish'.

#### 1.5.6. Ejecutar el Emulador dando click en la punta de flecha (columna 'Actions')

**<div align="right"><a href="#punto-1-entorno-de-desarrollo">Volver al Menú</a></div>**

---
## 1.6. Configurar las variables de Entorno del Sistema
&nbsp;

#### 1.6.1. En el Menú Windows buscar 'Editar las variables de entorno del sistema'

#### 1.6.2. Dar clic en 'Variables de entorno ...'

#### 1.6.3. En las 'Variables de Sistema ...' dar clic en 'Nueva ...' y escribir lo siguiente:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Nombre de la variable**:  JAVA_HOME<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Valor de la variable**:   'Examinar Directorio': C:\Program Files\Android\Android Studio\jbr\bin<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Nombre de la variable**:  ANDROID_HOME<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Valor de la variable**:   'Examinar Directorio': C:\Users\{usuario_del_sistema}\AppData\Local\Android\Sdk

**<div align="right"><a href="#punto-1-entorno-de-desarrollo">Volver al Menú</a></div>**

---
## 1.7. Instalar Expo Go en el Celular
&nbsp;

#### 1.7.1. En el celular, abrir la tienda de aplicaciones y buscar 'Expo Go' para instalarlo.

#### 1.7.2. Instalar la aplicación 'Expo Go' en el celular.

**<div align="right"><a href="#punto-1-entorno-de-desarrollo">Volver al Menú</a></div>**

---

<div align="right">
  <table border="0">
    <tr>      
      <td align="center">1. <a href="#punto-1-entorno-de-desarrollo">Entorno de Desarrollo</a></td>
      <td align="center"><a href="../react_native.md">Menú Principal de React</a></td>
      <td align="center">2. <a href="02_configuracion.md">Configuración del Proyecto</a></td>
    </tr>
  </table>
</div>
<!-- ![Pantalla Principal Android](img/01_android_studio.png) -->