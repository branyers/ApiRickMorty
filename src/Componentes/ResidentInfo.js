import React from 'react'

const ResidentInfo = ({residents}) => {

      return (
            <div className="card col-md-6">
                  <div className="card-body col-md-6">
                        <div className="father col-md-6">
                        <div className="col-md-6">
                         <img src={residents.image}/>
                        </div>
                        <div className="col-md-6">
                              <span>{residents.name}</span>
                              <h4> {residents.status}</h4>
                              <span>Last known location</span>
                              <span>Anatomy park </span>
                              <span>first seen </span>
                              <span>anatomy park </span>
                        </div>
                        </div>
                  </div>
            </div>
      )
}

export default ResidentInfo;