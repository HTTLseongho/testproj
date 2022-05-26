import React from 'react';
import {useNavigate} from "react-router-dom";

const Login = (props) => {

    const users = [
        {idx: "1", id: "a001", password: "0000", name: "일성호"},
        {idx: "2", id: "a002", password: "0000", name: "이성호"},
        {idx: "3", id: "a003", password: "0000", name: "삼성호"},
    ];

    const navigate = useNavigate();

    return (
        <>
            <h1>Login page</h1>
            <form>
                <input type="text" name="id" placeholder="아이디"/>
                <input type="password" name="pw" placeholder="비밀번호"/>
                <button>Login</button>
            </form>
            <button onClick={ () => {
                navigate('/home');
            }}>강제로 로그인</button>
        </>
    );
};

export default Login;