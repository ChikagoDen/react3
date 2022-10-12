import React from 'react';
import CastomLinc from "../components/CastomLinc";
import {useDispatch, useSelector} from "react-redux";
import {logoutInitial} from "../redux/reducers/indexReducer";
import {useNavigate} from "react-router-dom";


const HomePage = () => {
    const dispatch=useDispatch();
    const user=useSelector(state => state.user);
    const navigate= useNavigate();

    const handleAuth =()=>{
        if(user)return dispatch(logoutInitial);
        navigate('/register')

    }

    return (
        <div>
            <CastomLinc to="/register">
                Регистрация
            </CastomLinc>
            <br/>
            <CastomLinc to="/login">
                Вход
            </CastomLinc>
            <br/>
            <br/>
            Главная
            <br/>
            <br/>
            <button onClick={handleAuth}>Выйти</button>
        </div>
    );
};

export default HomePage;