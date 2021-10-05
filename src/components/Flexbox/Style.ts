import styled from "styled-components";

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0px;
  }
  width: 100vw;
  height: 100vh;
  background-color: #a020f0;

  //start
  display: flex;
 
  header {
    height: 150px;
    width: 100%;
    background: white;
  }

  main {
    height: 150px;
    width: 100%;
    background: blue;
  }
  aside {
    height: 150px;
    width: 100%;
    background: yellow;
  }
  footer {
    height: 150px;
    width: 100%;
    background: pink;
  }
`;
