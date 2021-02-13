import React,{useState, useEffect} from 'react'
import getLocations from "../Services/RickandMorty"

export const LocationInfo = () => {
const [Locations, setLocations] = useState([])

useEffect( async() =>{

    getLocations().then(result =>{
        setLocations(result.data.results)
    })


},[])

console.log(Locations)

    return (
        <div>
            
        </div>
    )
}
