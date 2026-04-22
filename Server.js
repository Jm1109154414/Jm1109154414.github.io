import http from 'http';
import url from 'url';

const servidor = http.createServer((req, res) => {
  console.log("Alguien me mandó una solicitud");
  //console.log(req);
const urlProcesada = url.parse(req.url, true);
 //console.log(urlProcesada);
const queryParams = urlProcesada.query;
  console.log(queryParams.x);
  


  let message = 'Quiero la libertad de esculpir y cincelar mi propio rostro, de detener la hemorragia con cenizas, de crear mis propios dioses a partir de mis entrañas...';
  if (queryParams.x === '1') {
    message = 'hola';
  } else if (queryParams.x === '2') {
    message = 'adios';
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(message + '\n');
});

const puerto = 1984;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});

