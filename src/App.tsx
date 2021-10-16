import React, { useCallback, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import {AppContext} from './components/Provider'

import InputSearch from "./components/hooks/InputSearch";
import { Container } from "./components/hooks/style";
import Lista from "./components/Lista";

function App() {
  const [texto, setTexto] = useState<string>("");
  const [contador, setContador] = useState<number>(0);

  const myRef = React.useRef() as  React . MutableRefObject < HTMLInputElement >

  useEffect(() => {
    console.log(`Action current in useEffect ${contador}`);
    console.log(myRef.current.value)

  }, [contador, texto]);

  useEffect(()=>{
    console.log(myRef.current.value)
  },[myRef])
  const Formatar = useCallback((event) => {
    event.preventDefault();
  }, []);
  //const  usuario  = React.useContext(AppContext)

  //<Lista />
  return (
    <Router>
      <Container>
        <h1>
          Dados Informados <span>{texto}</span>
        </h1>
        <InputSearch
          onChange={(e) => {
            setTexto(e.currentTarget.value);
            Formatar(e);
          }}
        />
        {/**Caso seja informado a lista envaminha para rota informada */}
        <Route path="/lista" component={Lista} />
        <input
          type="button"
          className="button"
          value="Gerar Query Param"
          onClick={() => setContador(contador + 1)}
        />
        <h2>{contador}</h2>
        <br />

          <input ref={myRef} type="text" />

      </Container>
    </Router>
  );
}

export default App;
