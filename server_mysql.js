import express from 'express';
//import path from 'path';
//import { fileURLToPath } from 'url';
import mysql from 'mysql2';


const app = express();
/*
const path = require('path');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'imagenes')));
app.use(express.json());
*/

const connection = mysql.createConnection({
    host: process.env.DB_HOST || "mysql-31efc894-tec-f26e.e.aivencloud.com",
    port: Number(process.env.DB_PORT || 20902),
    user: process.env.DB_USER || "avnadmin",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "defaultdb"
});

if (!process.env.DB_PASSWORD) {
  throw new Error('Missing required environment variable DB_PASSWORD');
}

connection.connect(error => {
  if (error) throw error;
  console.log("Conectada");
});

/*app.post("/api/otro", (req, res) => {
    console.log("El cuerpo de la petición:", req.body);
    res.sendStatus(200);
});*/

app.get('/bienvenida', (req, res) => {
   res.send('Esto no es una página html');
});


app.get('/otraBienvenida', (req, res) => {
  res.sendFile('bienvenida.html');
});

app.listen(1984, () => {
    console.log('Up and up');
});