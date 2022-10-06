import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducers";
import {messageReducer} from "./reducers/messageReducer";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

const config ={
    key:'root',
    storage
}



const logger = (store) => (next) => (action) => {
    const timePause=action.meta?.timePause;
    if (!timePause){
        return next(action);
    }
    if (action.type === 'addMessage') {
        setTimeout(()=>{alert( `${action.payload.author} вы отправили сообщение!!!`  )},1000);
        const timeOut = setTimeout(()=>next(action),timePause);
        return ()=>{clearTimeout(timeOut)}
    }
};

const reducer =combineReducers({
    chats: chatsReducer,
    messagesList:messageReducer
});

const persistedReducer = persistReducer(config,reducer);

export const store = createStore(persistedReducer,applyMiddleware(logger));

export const persistor = persistStore(store);

