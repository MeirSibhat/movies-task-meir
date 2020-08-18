import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"

import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { doApiGet } from './services/apiService';
function SearchMovies(props) {
    const [search, setSearch] = useState("bigSearchCss")
    const [input, setInput] = useState("")
    const dispatch = useDispatch() 

    let Mykey = "2a7a5fec";
    let url = `http://www.omdbapi.com/?apikey=${Mykey}&s=`
    const changeInput = (e) => {
        let val = e.target.value;
        setInput(val)
        if (val.length > 0) {
            setSearch("smalSearchCss")
            doApiGet(url + val)
                .then(data => {
                //    console.log(data);
                    if (data.Search) {
                        dispatch({ type: "setMovies", newList: data.Search });
                        dispatch({ type: "messgeNoResult", moveisResult: false });
                    }
                    else {
                        dispatch({ type: "setMovies", newList: [] });
                        dispatch({ type: "messgeNoResult", moveisResult: true });
                    }
                })
        }
        else {
            setSearch("bigSearchCss")
            console.log(val.length);
            dispatch({ type: "messgeNoResult", moveisResult: false });
        }
    }
    return (
        <div>
            <div className={search}>
                <TextField
                    onChange={changeInput}
                    className="textClass"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment >
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
        </div>

    )
}

export default SearchMovies


