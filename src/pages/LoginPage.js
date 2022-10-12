import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {loginInitial} from "../redux/reducers/indexReducer";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch=useDispatch();
    const navigate= useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email || !password) return;
        dispatch(loginInitial(email,password))
        navigate('/')

    }

    return (
        <div>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type={"submit"}>Вход</button>
            </form>
            
        </div>
    );
};

export default LoginPage;