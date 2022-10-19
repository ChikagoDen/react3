import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducers";
import {messageReducer} from "./reducers/messageReducer";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";
import {gitReducer} from "./reducers/gitReducer";
import {indexReducer} from "./reducers/indexReducer";

const config ={
    key:'root',
    storage
}

const reducer =combineReducers({
    chats: chatsReducer,
    messagesList: messageReducer,
    posts: gitReducer,
    status: indexReducer
});

const persistedReducer = persistReducer(config,reducer);

export const store = createStore(persistedReducer,applyMiddleware(thunk));
export const persist = persistStore(store);

