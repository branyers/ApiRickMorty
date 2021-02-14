import React, { useEffect, useState } from 'react'
import axios from "axios"
import ResidentInfo from './ResidentInfo'

 const ResidentContainer = ({ Residents }) => {

 const [magigComponent, setMagigComponent] = useState()
    const resultResidents = (data) =>{
        const Allresidents = data.map((residents) =>{
            return <ResidentInfo residents={residents}/>
        })
        setMagigComponent(Allresidents)
    }



    useEffect(async () => {

        Residents.map((link) => {
            let SaverResidents = []
            SaverResidents.push(

                axios(link).then((result) => {
                console.log(result.data)
            })
            
            )
               

                Promise.all(SaverResidents).then((rest) =>{
                    resultResidents(rest)
                })
        },[Residents])





    })





    return (
        <div>

        {magigComponent}

        </div>
    )
}

export default ResidentContainer