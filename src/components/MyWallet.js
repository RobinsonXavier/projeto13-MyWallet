import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Values from "./Values";

import back from '../assets/images/back.svg';
import minus from '../assets/images/minus.svg';
import plus from '../assets/images/plus.svg';

export default function MyWallet ({user, token}) {
    const navigate = useNavigate();
    const [values, setValues] = useState([]);
    const {valueId} = useParams();
    const [sum, setSum] = useState(0); 

    useEffect(() => {
        setInterval(online, 5000);
    },[])

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'user': `${valueId}`
        }
      }

    useEffect(() => {
        getValues();
    }, []);

    function online () {

        const request = axios.post('http://localhost:5000/status',{}, config);

        request.catch(error => console.log(error.message));

        request.then(() => {
            console.log('atualizado')
        })

    };

    function getValues () {

        const promise = axios.get(`http://localhost:5000/values/${valueId}`, config);

        promise.catch(error => console.log(error.message));

        promise.then(response => {
            let total = 0;
            response.data.map(element => total = total + Number(element.value));
            setSum(total);
            setValues(response.data)
        });
    };

    function toNewEntry () {
        navigate('/NewEntry');
    }

    function toNewExit () {
        navigate('/NewExit');
    }

    function backToLogin () {
        navigate('/');
    }

    return (
        <>
            <MyWalletPage>
                <div>
                    <h1>Olá, {`${user.name}`}</h1>
                    <img onClick={backToLogin} src={back} alt = 'button-back' />
                </div>
                {values.length === 0 ?
                <EmptyWallet>
                    <span>Não há registros de entrada ou saida</span>
                </EmptyWallet>
                :
                <Wallet>
                    {values.map( element => <Values time={element.time} description={element.description}
                    value={element.value} type={element.type} ></Values>)}
                    <FinalValue>
                        <h1>SALDO</h1>
                        {sum >= 0 ? <Entry>{sum}</Entry> : <Exit>{sum.toString().replace('-', '')}</Exit>}
                    </FinalValue>
                </Wallet>
                }
                
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

const Wallet = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start !important;
    align-items: center;
    background-color: #ffffff;
    width: 90% !important;
    height: 60vh;
    margin: 0 20px;
    border-radius: 5px;
    padding-top: 5px;
    
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
    margin-bottom: 15px;
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

const FinalValue = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    font-size: 16px !important;
    color: #000000;
    font-weight: 400;
    width: 90%;
    margin-bottom: 15px;
    bottom: -20px;

    span {
        font-family: 'Raleway', sans-serif;
        font-size: 16px !important;
        color: #C6C6C6;
        font-weight: 400;
    }

    h1 {
        font-family: 'Raleway', sans-serif !important;
        color: #000000 !important;
        font-size: 17px !important;
        font-weight: 700 !important;
        margin: 0 !important;
    }
    
`;

const Entry = styled.p`
    color: #03AC00;
    font-family: 'Raleway', sans-serif;
    font-size: 16px !important;
    font-weight: 400;
`;

const Exit = styled.p`
    color: #C70000;
    font-family: 'Raleway', sans-serif;
    font-size: 16px !important;
    font-weight: 400;
`;
