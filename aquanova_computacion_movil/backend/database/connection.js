import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();


const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'aquanova_movil',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelayMs: 0,
});

// Probar la conexión al iniciar
pool.getConnection()
  .then((connection) => {
    console.log(' Conexión a MySQL exitosa');
    connection.release();
  })
  .catch((err) => {
    console.error(' Error de conexión a MySQL:', err.message);
    process.exit(1);
  });

export default pool;
