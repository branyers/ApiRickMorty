import React, { useEffect, useState } from 'react'
import axios from "axios"
import ResidentInfo from './ResidentInfo'

 const ResidentContainer = ({ Residents }) => {

 const [magigComponent, setMagigComponent] = useState([])
    let iSMounted = true
    const resultResidents = (data) =>{
        const Allresidents = data.map((residents) =>{
            return <ResidentInfo key={residents.id} residents={residents}/>
        })
        setMagigComponent(Allresidents)
    }



    useEffect( () => {
        let SaverResidents = []
        Residents.map((link) => {
            SaverResidents.push(

                axios(link).then((result) => {
                console.log(result.data)
                if (iSMounted){return result.data}
                
            })
            
            )
        }
        
        
        
        )
        Promise.all(SaverResidents).then((rest) =>{
            resultResidents(rest)
        })



    },[Residents])




    return (
        <div>

        {magigComponent}

        </div>
    )
}

export default ResidentContainer