import React, {useContext} from 'react';
import {Outlet} from "react-router-dom";
import CastomLinc from "./CastomLinc";
import {ThemeContecst} from "../contecst/ContecstThema";

const Lauot = () => {
    const {theme, funcThema} = useContext(ThemeContecst);
    return (
        <>
            <header>
                <CastomLinc to={'/'} >
                    Главная
                </CastomLinc>
                <br/>
                <CastomLinc to="/profile">
                    Профиль
                </CastomLinc>
                <br/>
                <CastomLinc to="/chats">
                    Чаты
                </CastomLinc>
                <br/>
                <hr/>
            </header>
            <main style={{background:theme.background, color:theme.color,minHeight:200}}>
                <Outlet/>
            </main>
            <footer>
                <br/>
                <hr/>
                Podval
                <br/>
                <button onClick={funcThema}>Переключить тему</button>
                <br/>
                <hr/>
            </footer>
        </>
    );
};

export default Lauot;