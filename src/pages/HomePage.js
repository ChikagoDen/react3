import React from 'react';
import CustomLinc from "../components/CastomLinc";
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
            <CustomLinc to="/register">
                Регистрация
            </CustomLinc>
            <br/>
            <CustomLinc to="/login">
                Вход
            </CustomLinc>
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