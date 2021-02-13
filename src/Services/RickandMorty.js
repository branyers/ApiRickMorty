import axios from "axios"

 const getLocations = () => {
    const URL = `https://rickandmortyapi.com/api/location`;
    const res = axios(URL);
    return res;
  };
  
  export default getLocations