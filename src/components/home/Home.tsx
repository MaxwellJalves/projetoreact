import React from "react";
import { Container, ContainerMessage } from "./styled";

type TypeHome = {
  informacao: string;
};
const Home: React.FC<TypeHome> = (props: TypeHome) => {
  const { informacao } = props;

  return (
    <Container>
      <ContainerMessage>{informacao}</ContainerMessage>
    </Container>
  );
};

export default Home;
