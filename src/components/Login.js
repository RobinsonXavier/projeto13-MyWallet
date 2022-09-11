import React from "react";
import styled from "styled-components";

export default function Login () {
    return (
        <>
            <LoginPage>
                <div>
                    <h1>MyWallet</h1>
                </div>
                <form>
                    <input
                    placeholder="E-mail" />
                    <input
                    placeholder="Senha" />
                    <ButtonLogin>Entrar</ButtonLogin>
                    <ButtonSignup>Primeira vez? Cadastre-se</ButtonSignup>
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