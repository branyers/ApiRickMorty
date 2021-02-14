import React from 'react'


export const LocationInfo = ({name,type,dimension,residents}) => {

    return (
        <div>
            <p className="color">{name}</p>
            <p className="color">{type}</p>
            <p className="color">{dimension}</p>
            <p className="color">{residents.length}</p>
        </div>
    )
}

