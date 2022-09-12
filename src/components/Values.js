import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Values ({time, description, value, type}) {
    return (
        <>
            <Value>
                <div>
                    <span>{time + ' '}</span>
                    {description}
                </div>
                {type === 'entry' ? <Entry>{value}</Entry> : <Exit>{value.toString().replace('-', '')}</Exit>}
            </Value>
        </>
    );
};

const Value = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    font-size: 16px !important;
    color: #000000;
    font-weight: 400;
    width: 90%;
    margin-bottom: 15px;

    span {
        font-family: 'Raleway', sans-serif;
        font-size: 16px !important;
        color: #C6C6C6;
        font-weight: 400;
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