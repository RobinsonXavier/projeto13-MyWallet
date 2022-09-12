import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


export default function NewExit ({token, user}) {
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    function handleForm (ev) {
        setForm({
            ...form, [ev.target.name]: ev.target.value,
        })
    }

    function newExitValue(ev) {
        ev.preventDefault();

        const request = axios.post('http://localhost:5000/values', 
        {...form,
        type: 'exit',
        userId: user.id}, config);

        request.catch(error =>  alert(`preencha os dados corretamente (${error.message})`));

        request.then( response => navigate(`/MyWallet/${user.id}`));
    }

    function toSignup () {
        navigate('/Signup');
    }
    return (
        <>
            <NewExitPage>
                <div>
                    <h1>Nova saída</h1>
                </div>
                <form onSubmit={newExitValue}>
                <input
                    placeholder="Valor"
                    type='number'
                    value={form.value}
                    name='value'
                    onChange={handleForm}
                    required  />
                    <input
                    placeholder="Descrição"
                    type='text'
                    value={form.description}
                    name='description'
                    onChange={handleForm}
                    required />
                    <SaveExit type="submit" >Salvar saída</SaveExit>
                </form>
            </NewExitPage>
        </>
    )
};

const NewExitPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        margin-top: 25px;
        h1 {
            font-family: 'Raleway', sans-serif;
            color: #ffffff;
            font-size: 32px;
            font-weight: 700;
            margin-left: 25px;
            height: 50px;
            text-align: center;
        }

        img {
            width: 23px;
            height: 24px;
            margin-right: 25px;
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

const SaveExit = styled.button`
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
