import styled from "styled-components";

export const Grid = styled.div`


display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 100px 100px;
gap: 25px;
padding: 10px;

background: #50A0F0;
color: black;
width: 800px;
height: 800px;

div:hover{
    display: flex;
    background: black;
    width: 100px;
    height: 100px;
    grid-row-start: 1;
    grid-row-end: 2;
}

section{
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    background: green;
    width: 80px;
    height: 80px;
    grid-row-start: 1;
    grid-row-end: 2;
}


`