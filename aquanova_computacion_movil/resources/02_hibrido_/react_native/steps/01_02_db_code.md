## <h1 align="center">I. Database</h1>
## 2. Codificación

2.1. **[Codificar la Base de Datos](#21-codificar-la-base-de-datos)**
<br>2.2. **[Ejecutar la Base de Datos](#22-ejecutar-la-base-de-datos)**

<br>

**<div align="center"><a href="../react_native.md">Menú React Native</a></div>**

---
## 2.1. Codificar la Base de Datos
&nbsp;

#### 2.1.1. Crear el archivo 'db_node.sql' en la carpeta 'database'

#### 2.1.2. Codificar la base de datos './database/db_node.sql'

```sql
 1    DROP DATABASE IF EXISTS db_node;
 2
 3    CREATE SCHEMA db_node DEFAULT CHARACTER SET utf8 ;
 4    USE db_node;
 5
 6    CREATE TABLE users (
 7      id INT AUTO_INCREMENT PRIMARY KEY,
 8      name VARCHAR(100) NOT NULL,
 9      lastname VARCHAR(100) NOT NULL,
10      email VARCHAR(150) NOT NULL UNIQUE,
11      password VARCHAR(255) NOT NULL,
12      phone VARCHAR(20),
13      image VARCHAR(255),
14      role VARCHAR(20),
15      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
16      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
17    ) ENGINE=InnoDB;
18
19    INSERT INTO users VALUES (
20      null,
21      "Albeiro",
22      "Ramos",
23      "profealbeiro2020@gmail.com",
24      "$2b$10$NR8eRuuAB12JoHe81ZYnG.i2/5k/D5TKrxc7Pk74W4rgzADdABM9G",
25      "3103103101",
26      "profile",
27      "admin",
28      null,
29      null
30    );
```

**<div align="right"><a href="#i-database">Volver al Menú</a></div>**

---
## 2.2. Ejecutar la Base de Datos
&nbsp;

#### 2.2.1. Abrir el 'XAMPP Control Panel' y ejecutar los servicios de 'Apache' y 'MySQL'.

#### 2.2.2. Abrir el navegador y escribir http://localhost/phpmyadmin/

#### 2.2.3. Dar click en 'Importar'

#### 2.2.4. Dar click en 'Seleccionar archivo'

#### 2.2.5. Seleccionar el archivo './database/db_node.sql'

#### 2.2.6. Dar click en 'Importar'


**<div align="right"><a href="#i-database">Volver al Menú</a></div>**

---
<div align="right">
  <table border="0">
    <tr>      
      <td align="center"><a href="#i-database">Entorno de Desarrollo de la Base de Datos</a></td>
      <td align="center"><a href="../react_native.md">Menú Principal de React</a></td>
      <td align="center"><a href="02_01_backend_entorno.md">Entorno de Desarrollo del Backend</a></td>
    </tr>
  </table>
</div>

<!-- ![Pantalla Principal Android](img/01_android_studio.png) -->