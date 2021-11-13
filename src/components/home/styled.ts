import styled from "styled-components";

const Centralizar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled(Centralizar)`
  width: 100vw;
  min-width: 400px;
  height: auto;
`;
export const ContainerMessage = styled(Centralizar)`
  width: 400px;
  height: 200px;
  border-radius: 8px;
  background-color: rebeccapurple;

  font-size: 24px;
  font-weight: 700;
  font-family: Tahoma;
  color: white;
`;
