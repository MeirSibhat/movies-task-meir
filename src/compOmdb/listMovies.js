import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import ItemMovie from './itemMovie'

function ListMovies(props) {
    const movies = useSelector(state => state.movies_ar)
    const messgeNoResult=useSelector(state => state.messgeNoResult)


    return (
     
        <div>
            <div className="row ">
            {movies.map(item=>{
                return(<ItemMovie key={item.imdbID} item={item}/>)
            })}
            </div>
            {messgeNoResult&& (<div className="noresult"> No <br/> Result<br/>Yet<br/>    <br/></div>)}

            
        </div>
    )
}
export default ListMovies
