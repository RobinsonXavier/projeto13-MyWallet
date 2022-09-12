import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


export default function Login ({getData}) {
    const navigate = useNavigate();
    const [login, setLogin] = useState({});

    function handleLogin (ev) {
        setLogin({
            ...login, [ev.target.name]: ev.target.value,
        })
    }

    function loginIn (ev) {
        ev.preventDefault();

        const request = axios.post('http://localhost:5000/sign-in', login);

        request.catch(error => {
            getError(error);
        })

        request.then((response) => {
            getData(response);
            navigate(`/MyWallet/${response.data.id}`);
        })
    }

    function getError (e) {
        alert(`Um erro ocorreu, verifique seu login e senha(${e.message})`);
    }


    function toSignup () {
        navigate('/Signup');
    }
    return (
        <>
            <LoginPage>
                <div>
                    <h1>MyWallet</h1>
                </div>
                <form onSubmit={loginIn}>
                    <input
                    placeholder="E-mail"
                    type='email'
                    value={login.email}
                    name='email'
                    onChange={handleLogin}
                    required />
                    <input
                    placeholder="Senha"
                    type='password'
                    value={login.password}
                    name='password'
                    onChange={handleLogin}
                    required />
                    <ButtonLogin type="submit" >Entrar</ButtonLogin>
                    <ButtonSignup onClick={toSignup} >Primeira vez? Cadastre-se</ButtonSignup>
                </form>
            </LoginPage>
        </>
    )
};

const LoginPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    div {
        h1 {
            font-family: 'Saira Stencil One', cursive;
            color: #ffffff;
            font-size: 32px;
            font-weight: 400;
            margin-top: 30px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 60%;

        input {
        background-color: #ffffff;
        width: 326px;
        height: 58px;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #000000;
        border-radius: 5px;
        border: none;

        padding-left: 15px;
        }
    }
`;

const ButtonLogin = styled.button`
    background-color: #A328D6;
    width: 326px;
    height: 46px;
    border-radius: 5px;

    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    border: none;
`;

const ButtonSignup = styled.button`
    background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    border: none;
`;