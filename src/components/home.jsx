import React from 'react';
import {useNavigate} from "react-router-dom";

const Home = (user) => {

    const {idx, id, name} = user || {}; // prop(user)로 넘어온 로그인 된 사용자의 정보를 담아준다.

    const navigate = useNavigate();

    return (
        <>
            <h1>Home page</h1>
            <h3>로그인 성공</h3>
            <p>고유번호 : {idx}</p>
            <p>아이디 : {id}</p>
            <p>이름 : {name}</p>


            <button onClick={() => {
                navigate('/');
            }}>Logout
            </button>
        </>
    );
};

export default Home;