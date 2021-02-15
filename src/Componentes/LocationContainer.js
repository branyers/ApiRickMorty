import React, { useState, useEffect } from 'react'
import getLocations from "../Services/RickandMorty"
import { LocationInfo } from './LocationInfo'
import ResidentContainer from './ResidentContainer'
export const LocationContainer = () => {
    const [Residents, setResidensts] = useState([])
    const [name, setName] = useState()
    const [type, setType] = useState()
    const [dimension, setDimension] = useState()
    const [IsarrayEmpty, setIsarrayEmpty] = useState()
    const [Id, setID] = useState(5)



    const getTenResidents = (data) => {
        let Allresidents = [...data.residents];
        const arrayResidents = Allresidents.slice(0, 10)
        setResidensts(arrayResidents)
    }

    const PoblateState = (data) => {
        if (data.length == 0) {
            setIsarrayEmpty(false)
        } else {
            setIsarrayEmpty(true)
            setName(data.name)
            setType(data.type)
            setDimension(data.dimension)
            getTenResidents(data)
        }

    }

    const Auxcomponent = () => {
        if (IsarrayEmpty == false) {
            return <p>Write with ID number the location</p>
        } else {
            return (<>
                <LocationInfo name={name} type={type} dimension={dimension} residents={Residents}/>
                <ResidentContainer Residents={Residents} />
            </>
            )
        }
    }





    useEffect( () => {

          getLocations(Id).then((data) => {
            PoblateState(data.data)
        })

        return () => {
            <Auxcomponent />
        }

    }, [Id])






    return (
        <div>
            <Auxcomponent />
        </div>
    )
}
