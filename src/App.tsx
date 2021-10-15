import React  from "react";

import {AppContext} from './components/Provider'

import Lista from "./components/Lista";


function App() {

const  usuario  = React.useContext(AppContext)
console.log(usuario)
  return <Lista />;
}

export default App;
