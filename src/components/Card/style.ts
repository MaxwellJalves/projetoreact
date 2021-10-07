import styled from "styled-components";

const texto = "orange";
const fonte = 'Verdana, Geneva, Tahoma, sans-serif'
export const Containner = styled.div`
  display: flex;
  max-width: 1400px;
  height: 100vh;
  align-items: center;
  justify-content: center;

  font-family: Verdana, Geneva, Tahoma, sans-serif;

  color: white;
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ComponenteFilho = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
width: 300px;
height: 300px;
font-family:${fonte} ;
color: ${texto};
border: 2px solid white;
padding: 10px;

`
export const Descricao = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;
