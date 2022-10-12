import React, {useContext} from 'react';
import {Outlet} from "react-router-dom";
import CustomLinc from "./CastomLinc";
import {ThemeContext} from "../contecst/ContecstThema";

const Layout = () => {
    const {theme, funcTheme} = useContext(ThemeContext);
    return (
        <>
        <header>
            <CustomLinc to={'/'} >
                Главная
            </CustomLinc>
            <br/>
            <CustomLinc to="/profile">
                Профиль
            </CustomLinc>
            <br/>
            <CustomLinc to="/chats">
                Чаты
            </CustomLinc>
            <br/>
            <hr/>
            <CustomLinc to="/git">
                ГИТ
            </CustomLinc>
            <br/>
            <hr/>
        </header>
        <main style={{background:theme.background, color:theme.color,minHeight:200}}>
            <Outlet/>
        </main>
        <footer>
            <br/>
            <hr/>
            Подвал
            <br/>
            <button onClick={funcTheme}>Переключить тему</button>
            <br/>
            <hr/>
        </footer>
        </>
    );
};

export default  Layout;