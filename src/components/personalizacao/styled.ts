import styled from "styled-components";

const AlinhamentoDoTextoPadrao = styled.p`
  font-family:  Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  font-weight: 700;
`;
export const Descricao = styled(AlinhamentoDoTextoPadrao)`
padding-left:40px;
margin-bottom:24px;
`;

export const ContainerCentral = styled.div`
  * {
    margin: 0px;
  }

  padding: 24px 0px;
  display: flex;
  width: 400px;
  height: 14px;
  border-radius: 6px;

  justify-content: space-around;

  align-items: center;
  span{
    display: flex;
    font-size: 30px;
  }

  p {
    display: flex;

  }
  img{
    width: 40px;
    height:28px
  }
`;
