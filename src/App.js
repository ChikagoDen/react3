import './App.css';
import React, {useState, useRef, useEffect} from "react";
import {Box, Button, Input, List, ListItem, ListItemText, FormGroup, Grid} from "@mui/material";
import  Message from "./Message";
import {Route,Routes,Link,NavLink} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import Lauot from "./components/Lauot";
import NotEoundPage from "./pages/NotEoundPage";


export function App() {
    return(
        <Routes>
            <Route path={'/'} element={<Lauot/>}>
                <Route index element={<HomePage />}/>
                <Route path={'/profile'} element={<ProfilePage></ProfilePage>}></Route>
                <Route path={'/chats'} element={<ChatPage/>}/>
            </Route>
            <Route  path={'*'} element={<NotEoundPage/>}/>
        </Routes>
    )
}

export default App;
