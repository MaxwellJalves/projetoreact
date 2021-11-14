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
  height: 204px;
  border-radius: 8px;
  background-color: black;
  align-items: flex-start;
  padding: 24px 10px 24px 10px;

  flex-direction: column;
  font-size: 24px;
  font-weight: 700;
  font-family: Tahoma;
  color: white;
`;

export const Logo = styled.h2`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  font-family: Tahoma;
  color: orange;
`;

export const ContainerInformacao = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
