import * as types from './actionTypeIndex';
import {
    errorToLogin, errorToLogout,
    errorToRegister,
    loadingToLogin, loadingToLogout,
    loadingToRegister,
    successToLogin, successToLogout,
    successToRegister
} from "./actionIndex";
import {auth} from "../../servises/firebase";


const indexInitialState ={
    loading:false,
    error:null,
    currentUser:null
}
export  const indexReducer =(state = indexInitialState , action)=>{
    switch (action.type){
        case types.LOADING_REGISTER:
        case types.LOADING_LOGIN:
        case types.LOADING_LOGOUT:
            return {
                ...state,
                loading: true
            }
        case types.ERROR_REGISTER:
        case types.ERROR_LOGIN:
        case types.ERROR_LOGOUT:
            return {
                ...state,
                error: action.payload
            }
        case types.SUCCESS_LOGIN:
        case types.SUCCESS_REGISTER:
            return {
                ...state,
                currentUser: action.payload
            }
        case types.SUCCESS_LOGIN:
            return {
                ...state,
                currentUser: state.currentUser=null
            }

        default :
            return state;

    }
}

export const registerInitiate = (email,password,displayName)=>{
    return(dispatch)=>{
        dispatch(loadingToRegister());
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(({user})=>{
                user.updateProfile({
                    displayName
                })
                dispatch(successToRegister(user))
            })
            .catch((error)=>dispatch(errorToRegister(error.toString())))
    }
}

export const loginInitial = (email,password)=>{
    return(dispatch)=>{
        dispatch(loadingToLogin());
        auth
            .signInWithEmailAndPassword(email,password)
            .then(({user})=>{
                dispatch(successToLogin(user));
            })
            .catch((error)=>dispatch(errorToLogin(error.toString())))
    }
}
export const logoutInitial = ()=>{
    return(dispatch)=>{
        dispatch(loadingToLogout())
        auth.signOut()
            .then(()=>dispatch(successToLogout()))
            .catch((error)=>dispatch(errorToLogout(error.toString())))
    }
}