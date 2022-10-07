import {GET_POST, GET_POST_LOADING,GET_POST_ERROR} from "./actionTypeGit";
import {type} from "@testing-library/user-event/dist/type";

const initialState3 = {
    posts:[],
    loading:false,
    error:null
};

export  const gitReducer =(state = initialState3, action)=>{
    switch (action.type) {
        case GET_POST_LOADING:
            return {
                ...state, loading: true
            }
        case GET_POST:
            return {
                ...state, posts: action.payload, loading: false
            }
        case GET_POST_ERROR:
            return {
                ...state, error: action.payload, loading: false
            }

        default: return state;
    }
}

export const  getData = () => {
    return async (dispatch)=>{
        dispatch({
            type:GET_POST_LOADING
        })

        try {
            const response =await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            dispatch({type:GET_POST,payload:data});
        }
        catch (error) {
            dispatch({type:GET_POST_ERROR,payload:error.toString()})
        }
    }
}