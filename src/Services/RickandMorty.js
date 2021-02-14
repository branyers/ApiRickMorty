import axios from "axios"

 const getLocations = async(id) => {
    const URL = `https://rickandmortyapi.com/api/location/${id}`;
    const res = await axios(URL);
    return res;
  };
  
  export default getLocations