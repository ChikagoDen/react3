import {combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducers";
import {messageReducer} from "./reducers/messageReducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }
    return next(action);
};




const reducer =combineReducers({
    chats: chatsReducer,
    messagesList:messageReducer
})

export const store = createStore(reducer);

