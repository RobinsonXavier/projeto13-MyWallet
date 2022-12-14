import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Signup () {
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    function handleForm (ev) {
        setForm({
            ...form, [ev.target.name]: ev.target.value,
        })
    }

    function signUpUser (ev) {
        ev.preventDefault();

        const request = axios.post('http://localhost:5000/sign-up', form);

        request.catch( error => {
            alert(`preencha os dados corretamente (${error.message})`)
        });

        request.then(() => {
            alert('Usuário criado com sucesso!');
            navigate('/');
        })

    }

    function toLogin () {
        navigate('/');
    }
    console.log(form);
    return (
        <>
            <SignupPage>
                <div>
                    <h1>MyWallet</h1>
                </div>
                <form onSubmit={signUpUser}>
                    <input
                    placeholder="Nome"
                    type='text'
                    value={form.name}
                    name='name'
                    onChange={handleForm}
                    required />
                    <input
                    placeholder="E-mail"
                    type='email'
                    value={form.email}
                    name='email'
                    onChange={handleForm}
                    required />
                    <input
                    placeholder="Senha"
                    type='password'
                    value={form.password}
                    name='password'
                    onChange={handleForm}
                    required />
                    <input
                    placeholder="Confirme a senha"
                    type='password'
                    value={form.confirmPassword}
                    name='confirmPassword'
                    onChange={handleForm}
                    required />
                    <ButtonSignup type="submit" >Cadastrar</ButtonSignup>
                    <ButtonToLogin onClick={toLogin}>Já tem uma conta? Entre agora!</ButtonToLogin>
                </form>
            </SignupPage>
        </>
    )
};

const SignupPage = styled.div`
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

const ButtonSignup = styled.button`
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

const ButtonToLogin = styled.button`
    background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    border: none;
`;