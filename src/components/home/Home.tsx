import React from "react";
import Personalizar from "../personalizacao/Personalizar";
import {
  Container,
  ContainerInformacao,
  ContainerMessage,
  Logo,
} from "./styled";

type TypeHome = {
  informacao: string;
};

const cartao = {
  nome: "Maxwell Teste Dev",
  bandeira: "Master",
  dataVencimento: 12,
};

const Home: React.FC<TypeHome> = (props: TypeHome) => {
  const { informacao } = props;
  const { nome, bandeira, dataVencimento } = cartao;

  return (
    <Container>
      <ContainerMessage>
        <Logo>{informacao}</Logo>
        <ContainerInformacao>
          <Personalizar
            nome={nome}
            bandeira={bandeira}
            dataVencimento={dataVencimento}
            visibilidade={true}
          />
        </ContainerInformacao>
      </ContainerMessage>
    </Container>
  );
};

export default Home;
