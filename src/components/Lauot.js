import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import CastomLinc from "./CastomLinc";

const Lauot = () => {
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
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                Podval
            </footer>
        </>
    );
};

export default Lauot;