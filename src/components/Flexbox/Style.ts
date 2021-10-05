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
  /**  A propriedade flex-direction  é utilizada para definir a direção do container , uma usabilidade é que o nosso layour por default vem como column, porém ao habilitar o flex 
  todo o comportamento foi modificado para mesma linha, sendo assim para manter o posionamento inicial precisamos passar o valor de colum para a propriedade flex-direction e também podemos
  reverter a ordem dos elementos utilizando o 
  flex-direction: column-reverse; 
  */
 
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
