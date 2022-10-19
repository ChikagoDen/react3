import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import CustomLinc from "./CastomLinc";
import {useDispatch, useSelector} from "react-redux";
import {logoutInitial} from "../redux/reducers/indexReducer";
import '../servises/header.css'

const Header = () => {
    const user = useSelector(state => state.status.currentUser);
    const dispatch=useDispatch();
    const navigate= useNavigate();
    const handleAuth =()=>{
        if(user)return dispatch(logoutInitial());
        navigate('/register')
    }
    return (
        <div className = {"header"}>
            <div className={"header-right"}>
                <CustomLinc to={'/'} >
                    Главная
                </CustomLinc>
                <CustomLinc to="/profile">
                    Профиль
                </CustomLinc>
                <CustomLinc to="/chats">
                    Чаты
                </CustomLinc>
                <CustomLinc to="/history">
                    История
                </CustomLinc>
            </div>
            <div className={"header-left"}>
                { user?(
                    <div>
                        <button onClick={handleAuth}>Выйти</button>
                    </div>
                ) : (
                    <div>
                        <CustomLinc to="/register">
                            Регистрация
                        </CustomLinc>
                        <CustomLinc to="/login">
                            Вход
                        </CustomLinc>
                    </div>
                    )
                }
                <hr/>
            </div>
        </div>
    );
};

export default Header;