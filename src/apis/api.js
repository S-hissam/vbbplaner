import axios from "axios";

export default axios.create({
  baseURL: "https://v5.vbb.transport.rest/"

});


// const url = 'https://v5.vbb.transport.rest/';
// const query = `locations?query=${location}&results=1`
// const response = await fetch(url + query);
// const data = await response.json();
// return data[0]

