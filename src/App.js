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
import ProtectedRouters from "./components/ProtectedRouters";

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
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/profile'} element={<ProtectedRouters><ProfilePage></ProfilePage></ProtectedRouters>}></Route>
                    <Route path={'/chats'} element={<ProtectedRouters><ChatPage/></ProtectedRouters>}/>
                    <Route path={'/message/:idChat'} element={<ProtectedRouters><Message/></ProtectedRouters>}/>
                    <Route path={'/message/:idChat/:author'} element={<ChatFiltrAuthor/>}/>
                    <Route path={'/history'} element={<ProtectedRouters><PageGit/></ProtectedRouters>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                </Route>
                <Route  path={'*'} element={<NotEoundPage/>}/>
            </Routes>
        </div>
        </ThemeContext.Provider>
    )
}

export default App;
