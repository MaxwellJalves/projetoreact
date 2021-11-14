import React,{useState} from "react";
import Personalizar from "../personalizacao/Personalizar";
import {
  Botao,
  Container,
  ContainerInformacao,
  ContainerMessage,
  Logo,
} from "./styled";

type TypeHome = {
  informacao: string;
};

const cartao = {
  nome: "Nome Sobrenome",
  bandeira: "master",
  dataVencimento: 12,
};

const Home: React.FC<TypeHome> = (props: TypeHome) => {
  const { informacao } = props;
  const { nome, bandeira, dataVencimento } = cartao;
  const [status , setStatus] = useState(Boolean)
  return (
    <Container>
      <ContainerMessage>
        <Logo>{informacao}</Logo>
        <ContainerInformacao>
          <Botao type="button" value="visibilidade" onClick={() => {setStatus(!status)}}/>
          <Personalizar
            nome={nome}
            bandeira={bandeira}
            dataVencimento={dataVencimento}
            visibilidade={status}
          />
        </ContainerInformacao>
      </ContainerMessage>
    </Container>
  );
};

export default Home;
