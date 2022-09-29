import React from 'react';
import {Outlet} from "react-router-dom";
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
                <br/>
                <hr/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <br/>
                <hr/>
                Podval
            </footer>
        </>
    );
};

export default Lauot;