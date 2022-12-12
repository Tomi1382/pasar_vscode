import axios from "axios";

const BASE_URL = "https://yts.am/api/v2";

const API = axios.create({
  baseURL: BASE_URL
});

export default API;
 
return new Promis((resolve, reject)) =>
{

  axios.put("https://localhost:5000/api/carrito?id=" + id, {
    cantidad: cantidadActual + 1,
});
});