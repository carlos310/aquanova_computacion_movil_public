## <h1 align="center">II. Backend</h1>
## 3. Codificación

2.1. **[Preparar del Proyecto](#21-preparar-el-proyecto)**
<br>2.2. **[Iniciar del Proyecto](#22-iniciar-el-proyecto)**
<br>2.3. **[Ejecutar el Proyecto](#23-ejecutar-el-proyecto)**
<br>2.4. **[Configurar el Proyecto](#24-configurar-el-proyecto)**
<br>2.5. **[Estructurar el Proyecto](#25-estructurar-el-proyecto)**

<br>

**<div align="center"><a href="../react_native.md">Menú React Native</a></div>**

---
## 2.1. Preparar el Proyecto
&nbsp;

#### 2.1.1. Descargar el '.ZIP' del Repositorio

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Ir a **[07_Computacion_movil](https://github.com/UniminutoProfeAlbeiro/07_computacion_movil/tree/main)** y descargar el archivo '.ZIP'.
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Descomprimir el '.ZIP' y cambiar el nombre del proyecto.

#### 2.1.2. Crear un repositorio en Github

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Colocar el nombre del proyecto al Repositorio Creado 
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; En caso de no tener cuenta en Github, crear una (**[Ver Anexo 01. Trabajar con Github](../../../anexos/anexo01_trabajar_con_github.md)**).

#### 2.1.3. Abrir el Proyecto en Visual Studio Code

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Asociar el proyecto con Visual Studio Code
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Abrir una terminal de Visual Studio Code
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▹ &nbsp;Cambiar el nombre de la terminal a **'frontend'**, seleccionándola en la parte inferior derecha y presionando 
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; F2 / Rename...
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▹ &nbsp;Cambiar el color de la terminal **'frontend'**, dando click derecho / Chage Color... / Seleccionar el color
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Ingresar a la carpeta **'frontend'** y eliminar el archivo **'delete'**:

**<div align="right"><a href="#punto-2-configuración-del-proyecto">Volver al Menú</a></div>**

---
## 2.2. Iniciar el Proyecto
&nbsp;

#### 2.2.1. Crear el Proyecto

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; En la terminal de Visual Studio Code, crear el proyecto con el siguiente comando:

```bash
npx create-expo-app frontend --template blank-typescript
```	

&nbsp;&nbsp;&nbsp;&nbsp;? Select an Expo SDK version: » - Use arrow-keys. Return to submit.<br>
&nbsp;&nbsp;&nbsp;&nbsp;> Latest (SDK 57) - Recommended for most projects **# <ins>Seleccionar esta opción**</ins><br>
&nbsp;&nbsp;&nbsp;&nbsp;Other SDK version…<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Creating frontend using the blank-typescript template.<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;√ Downloaded and extracted project files.<br>
&nbsp;&nbsp;&nbsp;&nbsp;> npm install<br>
&nbsp;&nbsp;&nbsp;&nbsp;npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For<br>
&nbsp;&nbsp;&nbsp;&nbsp;CommonJS codebases, use uuid@11 (butbe aware this version will likely be deprecated in 2028).<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;added 467 packages, and audited 468 packages in 3m<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;45 packages are looking for funding<br>
&nbsp;&nbsp;&nbsp;&nbsp;  run `npm fund` for details<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;10 moderate severity vulnerabilities<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;To address issues that do not require attention, run:<br>
&nbsp;&nbsp;&nbsp;&nbsp;  npm audit fix<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;To address all issues (including breaking changes), run:<br>
&nbsp;&nbsp;&nbsp;&nbsp;npm audit fix --force<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Run `npm audit` for details.<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;✅ Your project is ready!<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;To run your project, navigate to the directory and run one of the following npm commands.<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;- cd frontend<br>
&nbsp;&nbsp;&nbsp;&nbsp;- npm run android<br>
&nbsp;&nbsp;&nbsp;&nbsp;- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac<br>
&nbsp;&nbsp;&nbsp;&nbsp;- npm run web<br>
&nbsp;&nbsp;&nbsp;&nbsp;? You are creating a project inside of an existing Git repository. Skip initializing a new git repository? » (Y/n) **# <ins>Escribir YES**</ins><br>
&nbsp;&nbsp;&nbsp;&nbsp;npm notice<br>
&nbsp;&nbsp;&nbsp;&nbsp;npm notice New minor version of npm available! 11.9.0 -> 11.19.1<br>
&nbsp;&nbsp;&nbsp;&nbsp;npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.19.1<br>
&nbsp;&nbsp;&nbsp;&nbsp;npm notice To update run: npm install -g npm@11.19.1<br>
&nbsp;&nbsp;&nbsp;&nbsp;npm notice<br>
<br>

**<div align="right"><a href="#punto-2-configuración-del-proyecto">Volver al Menú</a></div>**

---
## 2.3. Ejecutar el Proyecto
&nbsp;

#### 2.3.1. Ingresar a la carpeta "frontend"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; En la terminal ir a la carpeta "frontend" con el siguiente comando:

```bash
cd frontend
```

#### 2.3.2. Ejecutar el proyecto en el Emulador Android

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Para abrir el proyecto en el emulador Android, escribir en la terminal:

```bash
npm run android
```

&nbsp;&nbsp;&nbsp;&nbsp;> frontend@1.0.0 android<br>
&nbsp;&nbsp;&nbsp;&nbsp;> expo start --android<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Starting project at D:\PROYECTOS\07_computacion_movil\frontend<br>
&nbsp;&nbsp;&nbsp;&nbsp;Starting Metro Bundler<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;› Opening emulator Pixel_6a<br>
&nbsp;&nbsp;&nbsp;&nbsp;› Opening exp://192.168.78.145:8081 on Pixel_6a<br>

&nbsp;&nbsp;&nbsp;&nbsp;![QR](img/expo_go/01_expo_go.PNG)

&nbsp;&nbsp;&nbsp;&nbsp;› Scan the QR code above to open in Expo Go.<br>
&nbsp;&nbsp;&nbsp;&nbsp;› Metro: exp://192.168.78.145:8081<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;› Using Expo Go (Press s to switch to development build)<br>
&nbsp;&nbsp;&nbsp;&nbsp;› Press ? │ show all commands<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Logs for your project will appear below. Press Ctrl+C to exit.<br>
&nbsp;&nbsp;&nbsp;&nbsp;Android Bundled 4881ms index.ts (708 modules)

#### 2.3.3. Ejecutar el proyecto en el Dispositivo Móvil

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; **Requisito previo**: Descargar e instalar la aplicación **"Expo Go"** desde la **Google Play Store (Android)** o **App 
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Store (iOS)** en el teléfono.
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Asegurar que el teléfono y el computador estén **conectados a la misma red Wi-Fi**.
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Abrir la app Expo Go en el teléfono.
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; **Android**: Tocar el botón **"Scan QR code"** y escanear el código QR que aparece en la terminal del computador.
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; **iOS**: Abrir la aplicación de **Cámara de tu iPhone** y apuntar al código QR para abrir en Expo Go.

#### 2.3.4. Ejecutar el proyecto en el Dispositivo Móvil a través de un Tunel (sin abrir el Emulador Android)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Parar la ejecución del proyecto, presionando **Ctrl + C** en la terminal de Visual Studio Code.
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Instalar las siguientes dependencias para ejecutar el proyecto en el móvil a través de un túnel: 

```bash
npm install -g @expo/ngrok@^4.1.0 # instalación global
```

```bash
npm install --save-dev @expo/ngrok@^4.1.0 # instalación local como dependencia de desarrollo
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Modificar el package.json:

```json
 1    {
 2      "name": "frontend",
 3      "version": "1.0.0",
 4      "main": "index.ts",
 5      "dependencies": {
 6        "expo": "~57.0.23",
 7        "expo-status-bar": "~57.0.1",
 8        "react": "19.2.3",
 9        "react-native": "0.86.3"
10      },
11      "devDependencies": {
12        "@expo/ngrok": "^4.1.3",
13        "@types/react": "~19.2.2",
14        "typescript": "~6.0.3"
15      },
16      "scripts": {
17        "start": "expo start --tunnel --clear",
18        "start:local": "expo start --host lan --clear",
19        "start:offline": "expo start --offline --clear",
20        "android": "expo start --android",
21        "ios": "expo start --ios",
22        "web": "expo start --web"
23      },
24      "private": true
25    }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Ejecutar en el Visual Studio Code el siguiente comando:

```bash
npx expo start --tunnel --clear # Esto usa un túnel para sortear restricciones de red
```

#### 2.3.5. Ejecutar el proyecto en el Navegador Web

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Parar la ejecución del proyecto, presionando **Ctrl + C** en la terminal de Visual Studio Code.
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Instalar las siguientes dependencias para poder ejecutar el proyecto en el navegador web: 

```bash
npx expo install react-dom react-native-web
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Ejecutar en el Visual Studio Code el siguiente comando:

```bash
npm run web
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Con el Navegador Web abierto, Presionar la **Tecla F12** para abrir el inspector de propiedades.
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Seleccionar la opción **'Toggle device toolbar'**.
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Seleccionar en **'Dimensions'** un dispositivo móvil.

#### 2.3.6. Modificar el Mensaje e Inicio de la App

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; En 'frontend_mob/App.tsx' modificar la línea 7 :

```tsx
 1    import { StatusBar } from 'expo-status-bar';
 2    import { StyleSheet, Text, View } from 'react-native';
 3  
 4    export default function App() {
 5      return (
 6        <View style={styles.container}>
 7          <Text>¡Hola Mundo!</Text>
 8          <StatusBar style="auto" />
 9        </View>
10      );
11    }
12  
13    const styles = StyleSheet.create({
14      container: {
15        flex: 1,
16        backgroundColor: '#fff',
17        alignItems: 'center',
18        justifyContent: 'center',
19      },
20    });
```

**<div align="right"><a href="#punto-2-configuración-del-proyecto">Volver al Menú</a></div>**

---
## 2.4. Configurar el Proyecto
&nbsp;

#### 2.4.1. Modificar el archivo 'package.json' 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Parar la ejecución del proyecto, presionando **Ctrl + C** en la terminal de Visual Studio Code.
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Incluir en el código del 'package.json' las dependencias para asegurar que el proyecto funcione correctamente:
                    
```json
 1    {
 2      "name": "frontend",
 3      "version": "1.0.0",
 4      "main": "index.ts",
 5      "dependencies": {
 6        "expo": "~57.0.23",
 7        "expo-status-bar": "~57.0.1",
 8        "react": "19.2.3",
 9        "react-dom": "19.2.3",
10        "react-native": "0.86.3",
11        "react-native-web": "^0.21.2",
12        "@react-native-async-storage/async-storage": "2.2.0",
13        "@react-navigation/native": "^7.1.28",
14        "@react-navigation/native-stack": "^7.10.1",    
15        "@react-navigation/stack": "^7.6.16",
16        "axios": "^1.13.2",
17        "react-native-safe-area-context": "~5.6.0",
18        "react-native-screens": "~4.16.0"    
19      },
20      "devDependencies": {
21        "@expo/ngrok": "^4.1.3",
22        "@types/react": "~19.2.2",
23        "typescript": "~6.0.3"
24      },
25      "scripts": {
26        "start": "expo start --tunnel --clear",
27        "start:local": "expo start --host lan --clear",
28        "start:offline": "expo start --offline --clear",
29        "android": "expo start --android",
30        "ios": "expo start --ios",
31        "web": "expo start --web"
32      },
33      "private": true
34    }
```

#### 2.4.2. Instalar las dependencias del Proyecto:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Actualizar las dependencias incluidas en el **'package.json'** desde la terminar de Visual Studio Code el siguiente comando:

```bash
npm i
```

**<div align="right"><a href="#punto-2-configuración-del-proyecto">Volver al Menú</a></div>**

---
## 2.5. Estructurar el Proyecto
&nbsp;

#### 2.5.1. Estructura del Proyecto:

	# C = Carpetas
	# A = Archivos

	proyecto/                                      		     # C. Proyecto móvil en React Native.
	└── frontend/                                     		 # C. Carpeta raíz del proyecto en React Native.
			├── .claude/                                     # C. Importaciones al proyecto que vienen de 'Claude'
			├── .expo/                                       # C. Configuraciones del proyecto utilizados por 'Expo'
			├── assets/                                      # C. Recursos estáticos (imágenes, fuentes).
			├── node_modules/                                # C. Dependencias (librerías) instaladas para el frontend.
			├── src/                                         # C. Carpetas y archivos de la aplicación React Native.
			│   ├── data/                                    # C. Capa para obtención y manipulación de datos.
			│   │   ├── repositories/                        # C. Interfaces para acceder a diferentes fuentes de datos.
			│   │   │   ├── AuthRepository.tsx               # A. Lógica para la autenticación.
			│   │   │   └── UserLocalRepository.tsx          # A. Gestión de datos del usuario a nivel local (AsyncStorage).
			│   │   └── sources/                             # C. Implementaciones  de las fuentes de datos (local, remota).
			│   │       ├── local/                           # C. Lógica para acceder a datos almacenados localmente.
			│   │       │   └── LocalStorage.tsx             # A. Interactua con el almacenamiento local (AsyncStorage).
			│   │       └── remote/                          # C. Interactua con la API del backend (clientes API).
			│   │           ├── api/                         # C. Clientes o servicios para realizar llamadas a la API.
			│   │           │   └── ApiDelivery.tsx          # A. Cliente para interactuar la API con "delivery".
			│   │           └── models/                      # C. Estructuras de datos que se reciben de la API.
			│   │               └── ResponseApiDelivery.tsx	 # A. Tipo de la respuesta de la API de "delivery".
			│   ├── domain/                                  # C. Lógica de negocio y entidades del dominio (independiente).
			│   │   ├── entities/                            # C. Estructuras de los objetos del negocio (User).
			│   │   │   └── User.tsx                         # A. Entidad de usuario con sus propiedades (nombre, email).
			│   │   ├── repositories/                        # C. Interfaces para acceder a los datos (implementado en Data).
			│   │   │   ├── AuthRepository.tsx               # A. Interfaz para las operaciones de autenticación.
			│   │   │   └── UserLocalRepository.tsx          # A. Interfaz para la gestión de datos locales del usuario.
			│   │   └── useCases/                            # C. Lógica de negocio de la aplicación (dominio/data).
			│   │       ├── auth/                            # C. Casos de uso para la autenticación (Login, Register).
			│   │       │   ├── LoginAuth.tsx                # A. Lógica para el proceso de inicio de sesión del usuario.
			│   │       │   └── RegisterAuth.tsx             # A. Lógica para el proceso de registro de nuevos usuarios.
			│   │       └── userLocal/                       # C. Casos de uso relacionados con la gestión local del usuario.
			│   │           ├── GetUserLocal.tsx             # A. Obtener información del usuario almacenado localmente.
			│   │           ├── RemoveUserLocal.tsx          # A. Eliminar información del usuario almacenado localmente.
			│   │           └── SaveUserLocal.tsx            # A. Guardar la información del usuario localmente.
			│   └── presentation/                            # C. Capa de interfaz y presentación de datos (components, views).
			│       ├── components/                          # C. Componentes de interfaz de usuario (inputs, buttons).
			│       │   ├── CustomTextInput.tsx              # A. Componente de entrada de texto personalizado con estilos.
			│       │   └── RoundedButton.tsx                # A. Componente de botón con estilos de bordes redondeados.
			│       ├── hooks/                               # C. Hooks personalizados para lógica de presentación reutilizable.
			│       │   └── useUserLocal.tsx                 # A. Hook para manipular la información local del usuario.
			│       ├── theme/                               # C. Estilos y la temática visual general de la aplicación.
			│       │   └── AppTheme.tsx                     # A. Paleta de colores, tipografía y estilos consistentes.
			│       └── views/                               # C. Pantallas o vistas principales de la aplicación.
			│           ├── home/                            # C. Archivos relacionados con la pantalla principal.
			│           │   ├── Home.tsx                     # A. Componente principal de la pantalla inicio (Home).
			│           │   ├── Styles.tsx                   # A. Estilos para los componentes de la pantalla inicio.
			│           │   └── ViewModel.tsx                # A. Lógica de presentación para la pantalla inicio.
			│           ├── profile/                         # C. Archivos relacionados con el perfil del usuario.
			│           │   └── info/                        # C. Archivos relacionados con el perfil del usuario.
			│           │       ├── ProfileInfo.tsx          # A. Componente para mostrar información del perfil del usuario.
			│           │       └── ViewModel.tsx            # A. Lógica de presentación para el perfil del usuario.
			│           └── register/                        # C. Archivos relacionados con la pantalla de registro de usuarios.
			│               ├── Register.tsx                 # A. Componente principal de la pantalla de registro de usuarios.
			│               ├── Styles.tsx                   # A. Estilos para los componentes de la pantalla de registro.
			│               └── ViewModel.tsx                # A. Lógica de presentación para la pantalla registro de usuarios.
			├── .gitignore                                   # A. Archivos y carpetas que Git debe ignorar.
			├── AGENTS.md                                    # A. Archivo específico para trabajar con Agentes de Claude.
			├── app.json                                     # A. Configuración utilizada por Expo para configurar la app.
			├── App.tsx                                      # A. Raíz de la aplicación React Native (punto de entrada UI).
			├── CLAUDE.md                                    # A. Contexto para los asistentes de IA (como Claude Code)
			├── index.ts                                     # A. Punto de entrada para la aplicación React Native.
			├── LICENSE                                      # A. Define qué se puede y qué no puede hacer en el código.
			├── package-lock.json                            # A. Registra las versiones de las dependencias del frontend.
			├── package.json                                 # A. Manifiesto del frontend (nombre, dependencias, scripts).
			└── tsconfig.json                                # A. Configuración para el compilador de TypeScript.


#### 2.5.2. Crear la Estructura del Proyecto:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Crear las **Carpetas** y **Archivos** del proyecto, copiando el siguiente código:

```bash
mkdir -p src/data
mkdir -p src/data/repositories
ni src/data/repositories/AuthRepository.tsx -ItemType File -Force
ni src/data/repositories/UserLocalRepository.tsx -ItemType File -Force
mkdir -p src/data/sources
mkdir -p src/data/sources/local
ni src/data/sources/local/LocalStorage.tsx -ItemType File -Force
mkdir -p src/data/sources/remote
mkdir -p src/data/sources/remote/api
ni src/data/sources/remote/api/ApiDelivery.tsx -ItemType File -Force
mkdir -p src/data/sources/remote/models
ni src/data/sources/remote/models/ResponseApiDelivery.tsx -ItemType File -Force
mkdir -p src/domain
mkdir -p src/domain/entities
ni src/domain/entities/User.tsx -ItemType File -Force
mkdir -p src/domain/repositories
ni src/domain/repositories/AuthRepository.tsx -ItemType File -Force
ni src/domain/repositories/UserLocalRepository.tsx -ItemType File -Force
mkdir -p src/domain/useCases
mkdir -p src/domain/useCases/auth
ni src/domain/useCases/auth/LoginAuth.tsx -ItemType File -Force
ni src/domain/useCases/auth/RegisterAuth.tsx -ItemType File -Force
mkdir -p src/domain/useCases/userLocal
ni src/domain/useCases/userLocal/GetUserLocal.tsx -ItemType File -Force
ni src/domain/useCases/userLocal/RemoveUserLocal.tsx -ItemType File -Force
ni src/domain/useCases/userLocal/SaveUserLocal.tsx -ItemType File -Force
mkdir -p src/presentation
mkdir -p src/presentation/components
ni src/presentation/components/CustomTextInput.tsx -ItemType File -Force
ni src/presentation/components/RoundedButton.tsx -ItemType File -Force
mkdir -p src/presentation/hooks
ni src/presentation/hooks/useUserLocal.tsx -ItemType File -Force
mkdir -p src/presentation/theme
ni src/presentation/theme/AppTheme.tsx -ItemType File -Force
mkdir -p src/presentation/views
mkdir -p src/presentation/views/home
ni src/presentation/views/home/Home.tsx -ItemType File -Force
ni src/presentation/views/home/Styles.tsx -ItemType File -Force
ni src/presentation/views/home/ViewModel.tsx -ItemType File -Force
mkdir -p src/presentation/views/profile
mkdir -p src/presentation/views/profile/info
ni src/presentation/views/profile/info/ProfileInfo.tsx -ItemType File -Force
ni src/presentation/views/profile/info/ViewModel.tsx -ItemType File -Force
mkdir -p src/presentation/views/register
ni src/presentation/views/register/Register.tsx -ItemType File -Force
ni src/presentation/views/register/Styles.tsx -ItemType File -Force
ni src/presentation/views/register/ViewModel.tsx -ItemType File -Force

```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Pegar el código en la terminal (Verificar que esté en **..\frontend>**) y presione la tecla **ENTER**.

#### 2.5.3. Cargar las imágenes del Proyecto a la carpeta '../frontend/assets':

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Copiar las imágenes del proyecto que se encuentran en la carpeta: 
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **../resources/02_hibrido_/react_native/assets**.
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● &nbsp; Pegar las imágenes en la carpeta **'../frontend/assets'**. 

**<div align="right"><a href="#punto-2-configuración-del-proyecto">Volver al Menú</a></div>**

---
<div align="right">
  <table border="0">
    <tr>      
      <td align="center">1. <a href="01_entorno.md">Entorno de Desarrollo</a></td>
      <td align="center"><a href="../react_native.md">Menú Principal de React</a></td>
      <td align="center">3. <a href="03_frontend.md">Frontend</a></td>
    </tr>
  </table>
</div>

<!-- ![Pantalla Principal Android](img/01_android_studio.png) -->