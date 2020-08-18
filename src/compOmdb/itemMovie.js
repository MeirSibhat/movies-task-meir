import React, { useState } from 'react'

import Title from 'react-vanilla-tilt'
import MoreInfo from './moreInfo'
function ItemMovie(props) {
    const [seeInfo, setSeeInfo] = useState(false)

    const openInfo=()=>{
        setSeeInfo(!seeInfo)
    }
    let item=props.item;
    return (
        <div className="col-md-3  itemMovie shadow-md  p-2 mb-2">
           {/* <Title className="tilt" options={{ scale: 4, max: 30 ,width:150}}>  */}
            <div className="card" >
                <img src={item.Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.Title}</h5>
                    <p>{item.Year}</p>
                     <button className="btn btn-outline-primary btnInfo" onClick={openInfo}> info</button>
                   {seeInfo&&   <MoreInfo modelInfoClose={openInfo} seeInfo={seeInfo} item={item} />}

                </div>
            </div>
  {/* </Title> */}
        </div>
    )
}

export default ItemMovie


/**
 *
 *
 *
 */