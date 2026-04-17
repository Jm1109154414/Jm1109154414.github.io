import axios from 'axios';

const apiKey = "c75b5d50-3a79-11f1-be41-61ad8fdba0fb";

// GET
let respuestaGET = await axios.get("https://app.zenserp.com/api/v2/search", {
  params: { q: "Pied Piper" },
  headers: { apikey: apiKey }
});

console.log("GET:", respuestaGET.data);

// POST
let respuestaPOST = await axios.post("https://app.zenserp.com/api/v2/search", 
  { q: "Pied Piper" },
  { headers: { apikey: apiKey } }
);

console.log("POST:", respuestaPOST.data);
