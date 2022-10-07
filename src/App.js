import './App.css';
import React, {useState} from "react";
import {Route,Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import Lauot from "./components/Lauot";
import NotEoundPage from "./pages/NotEoundPage";
import Message from "./pages/Message";
import ChatFiltrAuthor from "./pages/ChatFiltrAuthor";
import {ThemeContecst, themes} from "./contecst/ContecstThema";
import PageGit from "./pages/PageGit";

export function App() {
    const [thema,setThema] = useState(themes.light);
    const toggleThemas = ()=>{
        setThema( prevState => prevState===themes.light ? themes.dark : themes.light)
    };
    return(
        <ThemeContecst.Provider value={{ theme:thema, funcThema:toggleThemas}}>
        <div>
            <Routes>
                <Route path={'/'} element={<Lauot/>}>
                    <Route index element={<HomePage />}/>
                    <Route path={'/profile'} element={<ProfilePage></ProfilePage>}></Route>
                    <Route path={'/chats'} element={<ChatPage/>}/>
                    <Route path={'/message/:idChat'} element={<Message/>}/>
                    <Route path={'/message/:idChat/:author'} element={<ChatFiltrAuthor/>}/>
                    <Route path={'/git'} element={<PageGit/>}/>
                </Route>
                <Route  path={'*'} element={<NotEoundPage/>}/>
            </Routes>
        </div>
        </ThemeContecst.Provider>
    )
}

export default App;
