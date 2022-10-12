import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {registerInitiate} from "../redux/reducers/indexReducer";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirm,setPasswordConfirm] = useState('');
    const [displayName,setDisplayName] = useState('');
    const dispatch=useDispatch();
    const navigate= useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password!==passwordConfirm) return;
        dispatch(registerInitiate(email,password,displayName))
        navigate('/')
    }

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                Введите имя
                <input value={displayName} onChange={(e)=>setDisplayName(e.target.value)}/>
                <br/>
                Введите почту
                <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                Введите пароль
                <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                Повторите пароль
                <input value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)}/>
                <br/>
                <button type={"submit"}>Регистрация</button>
            </form>
        </div>
    );
};

export default RegisterPage;