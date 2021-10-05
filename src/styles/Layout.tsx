import styled from 'styled-components'


export const Containner = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: 100%;
color: white;
`

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-around;
width: 70%;
height: 51.992px;
background: green;
color: black;
`

export const Icon = styled.image`
background: url(${props => props.type});
background-repeat: no-repeat;
background-size: 31.99px;
width: 51px;
height: 31.99px;
`

export const Input = styled.input`
width: 50%;
padding: 10px 10px;
border-radius: 5px;
border: 0;
box-shadow: 2px aquamarine;
`

export const CardLeft = styled.div`

display: flex;
flex-direction: column;
width: 20%;
height:570px; ;
background: #f33a3a;
justify-content: center;
align-items: center;
font-weight: bold;
color: white;
border-radius:9px;
margin: 6%;
border: 0;
`
export const CardCenter = styled.div`

display: flex;
flex-direction: column;
width: 60%;
height:100vh; 
background: #009e84;
margin-top: 6%;
border: 0;
color: white;
justify-content: center;
align-items: center;
`

export const CardRight = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 20%;
height:720px; ;
background: #0269df;
border-radius:9px;
margin-top: 6%;
margin-left: 20px;
margin-right:6%;
color: white;
`

export const GroupCard = styled.div`

display: flex;
justify-content: space-between;
width: 100%;
height:570px; ;

`