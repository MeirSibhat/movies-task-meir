const initState = {
    movies_ar:[],

    testINput:1,
    messgeNoResult:false
  
  }
  
  export const mReducer = (state = initState , action) =>{

    if(action.type==="testChange"){
      return{...state,testINput:action.add}
    }
    else if(action.type==="setMovies"){
      return {...state,movies_ar:action.newList}
    }
    else if(action.type==="messgeNoResult"){
      return {...state, messgeNoResult :action.moveisResult}
    }
    else{
      return state;

    }

  
  }
  
