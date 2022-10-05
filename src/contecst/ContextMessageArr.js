import {createContext} from "react";

export const messagesList =[
        { text: 'eeeeeeeee', author: 'qwer', id:1, idChat:1},
        { text: 'tttttttttt', author: 'asd', id:1, idChat:2},
        { text: 'vvvvvvvvvvvvv', author: 'cvb', id:2, idChat:1},
        { text: 'bbbbbbbbbbb', author: 'qwer', id:3, idChat:1},
        { text: 'nnnnnnnnn', author: 'asd', id:1, idChat:3},
        { text: 'dddddddd', author: 'cvb', id:2, idChat:2},
    ];
export const messagesListContext = createContext({messagesListArr:messagesList, funcMessagesList: ()=>{}} );