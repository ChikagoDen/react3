import React, {useContext} from 'react';
import {Outlet} from "react-router-dom";
import CustomLinc from "./CastomLinc";
import {ThemeContext} from "../contecst/ContecstThema";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    const {theme, funcTheme} = useContext(ThemeContext);
    return (
        <>
            <header style={{background:theme.background, color:theme.color,minHeight:200}}>
                <Header/>
            </header>
            <main style={{background:theme.background, color:theme.color,minHeight:200}}>
                <Outlet/>
            </main>
            <footer style={{background:theme.background, color:theme.color,minHeight:200}}>
                <button onClick={funcTheme}>Переключить тему</button>
                <Footer/>
            </footer>
        </>
    );
};

export default  Layout;