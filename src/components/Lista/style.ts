import styled from "styled-components";
const cordefundo = "	#4B0082";
export const ContainnerLista = styled.div`
  max-width: 90%;
  height: auto;
  background: ${cordefundo};

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;

  padding: 10px;

  div:hover {
    background: rgba(245, 245, 245, 0.3);
  }
`;
