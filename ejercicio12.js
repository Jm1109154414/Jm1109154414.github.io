import express from 'express';

const app = express();
app.use(express.json());

// Ejercicio 12: Parámetros en rutas
// Contexto: mini API de Kueski Pay para consultar datos de usuarios por su ID
//
// Ejercicio inventado:
// Crea rutas que permitan consultar el saldo y los movimientos
// de un usuario específico usando su ID directamente en la URL.
// Ejemplo: /getSaldo/1 regresa el saldo del usuario con ID 1


const usuarios = {
  1: { userId: 1, nombre: 'Jose', saldo: 1500 },
  2: { userId: 2, nombre: 'Punk', saldo: 0 },
};

const movimientos = {
  1: [
    { tipo: 'Pago', monto: 500, merchant: 'Liverpool', fecha: '2026-05-01' },
    { tipo: 'Pago', monto: 300, merchant: 'Coppel', fecha: '2026-05-10' },
  ],
  2: [],
};


// GET /getSaldo/:userId
// :userId es el parámetro — cambia dependiendo del usuario que se consulte
app.get('/getSaldo/:userId', (req, res) => {
  const { userId } = req.params;
  const usuario = usuarios[userId];
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.status(200).json(usuario);
});


// GET /getMovimientos/:userId
app.get('/getMovimientos/:userId', (req, res) => {
  const { userId } = req.params;
  const movsUsuario = movimientos[userId];
  if (movsUsuario === undefined) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.status(200).json(movsUsuario);
});


app.listen(3000, () => {
  console.log('Ejercicio 12 corriendo en http://localhost:3000');
});
