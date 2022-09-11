import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function NewEntry () {
    const navigate = useNavigate();

    function toSignup () {
        navigate('/Signup');
    }
    return (
        <>
            <NewEntryPage>
                <div>
                    <h1>Nova entrada</h1>
                </div>
                <form>
                    <input
                    placeholder="Valor" />
                    <input
                    placeholder="Descrição" />
                    <SaveEntry>Salvar entrada</SaveEntry>
                </form>
            </NewEntryPage>
        </>
    )
};

const NewEntryPage = styled.div`
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

const SaveEntry = styled.button`
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
