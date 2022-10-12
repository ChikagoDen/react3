import * as types from './actionTypeIndex'

export  const loadingToRegister=()=>({
    type:types.LOADING_REGISTER
})
export  const errorToRegister=(error)=>({
    type:types.ERROR_REGISTER,
    payload:error.toString()
})
export  const successToRegister=(user)=>({
    type:types.SUCCESS_REGISTER,
    payload:user
})
export  const loadingToLogin=()=>({
    type:types.LOADING_LOGIN
})
export  const errorToLogin=(error)=>({
    type:types.ERROR_LOGIN,
    payload:error.toString()
})
export  const successToLogin=(user)=>({
    type:types.SUCCESS_LOGIN,
    payload:user
})
export  const loadingToLogout=()=>({
    type:types.LOADING_LOGOUT
})
export  const errorToLogout=(error)=>({
    type:types.ERROR_LOGOUT,
    payload:error.toString()
})
export  const successToLogout=()=>({
    type:types.SUCCESS_LOGOUT
})