import styled from "styled-components";
const logo =
  "https://media.gettyimages.com/vectors/web-development-banner-design-vector-id1030806542?s=612x612";
export const ContainerHome = styled.div`
  * {
    margin: 0px;
    padding: 0px;
    box-shadow: none;
    box-sizing: border-box;
  }
  width: 100vw;
  height: 100vh;
 h1{
     padding-top: 20px;
     text-align: center;
    color: white;
    font-family: Tahoma;
 }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  height: 290px;
  max-width: 68vw;
  background: url(${logo}) no-repeat;
  background-size: contain;
  background-position: center;
  background-position: center;
  margin: 0px auto;
`;
export const ContainerLayout = styled.div`
  display: grid;
  grid-template-areas:
    "sidenav item item"
    "sidenav item item"
    "sidenav item item"
    "footer footer footer";

  .sidenav {
    margin-top: 22px;
    width: 300px;
    height: auto;
    background-color: #333;
    border-radius: 20px;

    grid-area: "sidenav";
    grid-row: sidenav;
  }
  .item {
    width: 300px;
    height: 290px;
    grid-area: "item";
    overflow: hidden;
  }
  .footer {
    margin-top: 40px;
    width: auto;
    height: 300px;
    background-color: #333;
    grid-area: "footer";
    grid-column: footer;
  }
  img {
    width: 100%;
    height: 250px;
    border-radius: 20px;
    overflow: hidden;
  }

  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 22px;
  }
`;
