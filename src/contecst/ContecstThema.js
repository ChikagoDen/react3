import {createContext} from "react";

export const themes = {
    light:
        { background:'green', color:'white' }
    ,
    dark:
        { background:'blue', color:'red' }
}
export const ThemeContecst = createContext({theme:themes.light, funcThema: ()=>{}} );