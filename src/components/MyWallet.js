import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import back from '../assets/images/back.svg';
import minus from '../assets/images/minus.svg';
import plus from '../assets/images/plus.svg';

export default function MyWallet ({user, token, config}) {
    const navigate = useNavigate();
    const [values, setValues] = useState([]);
    const {valueId} = useParams();
    
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
      }

    useEffect(() => {
        getValues();
    }, []);


    function getValues () {

        const promise = axios.get(`http://localhost:5000/values/${valueId}`, config);

        promise.catch(error => console.log(error.message));

        promise.then(response => setValues(response.data));
    };

    function toNewEntry () {
        navigate('/NewEntry');
    }

    function toNewExit () {
        navigate('/NewExit');
    }

    return (
        <>
            <MyWalletPage>
                <div>
                    <h1>Olá, {`${user.name}`}</h1>
                    <img src={back} alt = 'button-back' />
                </div>
                <EmptyWallet>
                    <span>Não há registros de entrada ou saida</span>
                </EmptyWallet>
                <Options>
                    <div onClick={toNewEntry}>
                        <img src={plus} />
                        <span>Nova entrada</span>
                    </div>
                    <div onClick={toNewExit}>
                        <img src={minus} />
                        <span>Nova saída</span>
                    </div>
                </Options>
            </MyWalletPage>
        </>
    )
};

const MyWalletPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

    
`;

const EmptyWallet = styled.div`
    display: flex;
    justify-content: center !important;
    align-items: center;
    background-color: #ffffff;
    width: 90% !important;
    height: 60vh;
    margin: 0 20px;
    border-radius: 5px;
    
    span {
        text-align: center;
        color: #868686;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 20px;
    }
    
`;

const Options = styled.div`
    display: flex;
    width: 90% !important;
    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: #A328D6;
        height: 114px;
        border-radius: 5px;
        padding-left:10px ;
        width: 45%;

        span {
            color: #ffffff;
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 17px;
        }
    }
    
`;


