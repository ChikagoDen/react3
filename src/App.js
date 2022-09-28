import './App.css';
import React from "react";
import {Route,Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import Lauot from "./components/Lauot";
import NotEoundPage from "./pages/NotEoundPage";
import Message from "./pages/Message";


export function App() {
    return(
        <Routes>
            <Route path={'/'} element={<Lauot/>}>
                <Route index element={<HomePage />}/>
                <Route path={'/profile'} element={<ProfilePage></ProfilePage>}></Route>
                <Route path={'/chats'} element={<ChatPage/>}/>
                <Route path={'/message/:idChat'} element={<Message/>}/>
            </Route>
            <Route  path={'*'} element={<NotEoundPage/>}/>
        </Routes>
    )
}

export default App;
