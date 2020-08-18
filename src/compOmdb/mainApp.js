import React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mReducer } from './reducer/movieReducer';
import SearchMovies from './searchMovies';
import ListMovies from './listMovies';

const myStore=createStore(mReducer)
function MainApp(props) {
    return (
    <Provider store={myStore}>
        <div className="container">
           <SearchMovies/>
           <ListMovies/>
       </div>
    </Provider>
    )
}

export default MainApp
