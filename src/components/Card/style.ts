import styled from "styled-components";

const texto = "white";
const fonte = "Verdana, Geneva, Tahoma, sans-serif";

export const ComponenteFilho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 300px;
  height: 400px;
  font-family: ${fonte};
  color: ${texto};
  border: 2px solid white;
  border-radius: 15px;
  padding: 10px;
  margin: 5px;

  overflow: hidden;
`;
export const Descricao = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  color: ${texto};
`;

export const Imagem = styled.img`
  width: 100%;
  height: 200px;

  background: url(${(props) => props.src});
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;

  border-radius: 30px;
  display: flex;
  font-weight: normal;
  text-overflow: ellipsis;
`;
