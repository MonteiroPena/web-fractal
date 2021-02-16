import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

// const headers = {
//   'Content-Type': 'application/json',
//   'Authorization': 'JWT fefege...'
// }

// const json = clientApiMaps.get('/recrutamentos/frontend/pontos.json', { headers: headers });
// json.then(response => console.log(response.data));

export default api