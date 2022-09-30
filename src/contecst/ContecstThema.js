import {createContext} from "react";

export const themes = {
    light:
        { background:'lightgrey', color:'black' }
    ,
    dark:
        { background:'darkgrey', color:'white' }
}
export const ThemeContecst = createContext({theme:themes.light, funcThema: ()=>{}} );