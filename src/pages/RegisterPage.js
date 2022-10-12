import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {successToRegister} from "../redux/reducers/actionIndex";
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
                <input value={displayName} onChange={(e)=>setDisplayName(e.target.value)}/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)}/>
                <button type={"submit"}>Регистрация</button>
            </form>
        </div>
    );
};

export default RegisterPage;