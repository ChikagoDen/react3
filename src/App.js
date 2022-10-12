import './App.css';
import React, {useState} from "react";
import {Route,Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import  Layout from "./components/Lauot";
import NotEoundPage from "./pages/NotEoundPage";
import Message from "./pages/Message";
import ChatFiltrAuthor from "./pages/ChatFiltrAuthor";
import {ThemeContext, themes} from "./contecst/ContecstThema";
import PageGit from "./pages/PageGit";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export function App() {
    const [thema,setThema] = useState(themes.light);
    const toggleThemas = ()=>{
        setThema( prevState => prevState===themes.light ? themes.dark : themes.light)
    };
    return(
        <ThemeContext.Provider value={{ theme:thema, funcTheme:toggleThemas}}>
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage />}/>
                    <Route path={'/profile'} element={<ProfilePage></ProfilePage>}></Route>
                    <Route path={'/chats'} element={<ChatPage/>}/>
                    <Route path={'/message/:idChat'} element={<Message/>}/>
                    <Route path={'/message/:idChat/:author'} element={<ChatFiltrAuthor/>}/>
                    <Route path={'/git'} element={<PageGit/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                </Route>
                <Route  path={'*'} element={<NotEoundPage/>}/>
            </Routes>
        </div>
        </ThemeContext.Provider>
    )
}

export default App;
