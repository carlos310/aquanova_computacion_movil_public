## <h1 align="center">Puesta en Marcha del Proyecto</h1>

database
backend
frontend

## 📝 Puesta en Marcha del Proyecto
&nbsp;

#### 1. Garantizar en el Computador el Entorno de Desarrollo (1. [Entorno de Desarrollo](steps/01_entorno.md)).

#### 2. Clonar el proyecto desde Github (Anexo 01. [Trabajar con Github](../../anexos/anexo01_trabajar_con_github.md)).

#### 3. Abrir el proyecto en Visual Studio Code.

#### 4. Abrir una terminal en 'Visual Studio Code' y ejecutar los siguientes comandos:

```powershell
ipconfig
```
#### NOTA:
Tomar en cuenta la 'ipconfig' del **'node_js/server.js'** y **'my-app/src/Data/sources/remote/api/apiDelivery.tsx'** ya que deben coincidir
```powershell
cd backend
```
```powershell
npm i
```
```powershell
node index.js
```

#### 5. Abrir otra terminal en 'Visual Studio Code' y ejecutar los siguientes comandos:

```powershell
cd frontend_mob
```
```powershell
npm install -g expo-cli exp
```
```powershell
npm i
```
```powershell
npm run android
```

#### 6. Comprobar que se ejecute correctamente la aplicación.

**<div align="right"><a href="#i-database">Volver al Menú</a></div>**

---

<div align="right">
  <table border="0">
    <tr>      
      <td align="center"><a href="00_01_preliminares.md">Entorno de Desarrollo de la Base de Datos</a></td>
      <td align="center"><a href="../react_native.md">Menú Principal de React</a></td>
      <td align="center"><a href="01_01_db_entorno.md">Entorno de Desarrollo de la Base de Datos</a></td>
    </tr>
  </table>
</div>
<!-- ![Pantalla Principal Android](img/01_android_studio.png) -->