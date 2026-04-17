import axios from 'axios';

const apiKey = "c75b5d50-3a79-11f1-be41-61ad8fdba0fb";
const baseURL = "https://app.zenserp.com/api/v2/search";

// GET Request
async function hacerGET() {
  try {
    console.log("Haciendo GET request...\n");
    
    const response = await axios.get(baseURL, {
      params: {
        q: "Pied Piper"
      },
      headers: {
        apikey: apiKey
      }
    });

    console.log("✓ GET exitoso");
    console.log("Resultado:", response.data);
    console.log("\n");
  } catch (error) {
    console.error("✗ Error en GET:", error.response?.data || error.message);
  }
}

// POST Request (ejemplo genérico)
async function hacerPOST() {
  try {
    console.log("Haciendo POST request...\n");
    
    const response = await axios.post(baseURL, 
      {
        q: "Pied Piper"
      },
      {
        headers: {
          apikey: apiKey,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log("✓ POST exitoso");
    console.log("Resultado:", response.data);
    console.log("\n");
  } catch (error) {
    console.error("✗ Error en POST:", error.response?.data || error.message);
  }
}

// Ejecutar ambas funciones
console.log("===== API ZenSerp =====\n");
await hacerGET();
await hacerPOST();
