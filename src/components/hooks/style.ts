import styled from 'styled-components'

const fonte = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
export const Container = styled.div`
width: 100%;
height: 100vh;
background:  blue;
color: white;
display: flex;
align-items: center;

flex-direction: column;
gap: 20px;
input{
    display: flex;
    width: 400px;
    height: 100px;
    align-items: center;
    box-sizing: border-box;
    padding-left:20px;
    font-size: 20px;
    font-family: ${fonte};
    font-weight: 500;
}

.button{
    background-color: black;
    color: white;
}

.button:hover{
    background-color: rgba(0,0,0,0.5);
}

span{
    color: orange;
    font-style: normal;
    font-size: 18px;
}
`