//import {Gridcss} from './components/Gridcss/Gridcss'

import React from "react";
import api from "./api-axios/Api";

export class App extends React.Component {
  state = {
    itens: [],
  };

  async componentDidMount() {
    const retorno = await api.get("");

    this.setState({
      itens: retorno.data
    });
  }

  render() {
    const { itens } =this.state
    const retorno =  JSON.stringify(itens);
    return (
      <div>
        <div> Registros retornados : {itens.length}</div>
          <li >
           {retorno.toString()}
          </li>
      </div>
    );
  }
}

export default App;
