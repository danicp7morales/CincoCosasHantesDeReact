/*import fetch from 'node-fetch';
//aquí hay una muestra completa en (nodejs):

import fetch from "node-fetch";

const fetchData = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/alpha/col"); // fetch() returns a promise, so we need to wait for it

  const country = await res.json(); // res is now only an HTTP response, so we need to call res.json()

  console.log(country); // Columbia's data will be logged to the dev console
};

fetchData();
*/
/*
fetch("https://reqres.in/api/users?per_page=12")
   .then((resp) => resp.json())
   .then((respuesta) => console.log(respuesta))
   .catch((err) => console.log(err))
   */
  const getUsers = async() => {
    const res = await fetch('https://reqres.in/api/users?per_page=12');
    const result = await res.json();

    console.log(result);
  }
  getUsers();

  