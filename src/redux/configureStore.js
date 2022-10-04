import {combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducers";
import {messageReducer} from "./reducers/messageReducer";

const reducer =combineReducers({
    chats: chatsReducer,
    messagesList:messageReducer
})

export const store = createStore(reducer);