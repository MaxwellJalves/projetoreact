import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import { ContainnerLista } from "./style";

interface ICard {
  id: string | number;
  descricao: string;
  url: string;
}
const Lista: React.FC = () => {
  const [lista, setLista] = useState<ICard[]>([]);

  async function requestApi() {
    const { data } = await axios.get<ICard[]>("http://localhost:8080/v1/itens");
    setLista(data);
  }

  useEffect(() => {
    requestApi();
  }, []);

  return (
    <ContainnerLista>
      {lista.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            descricao={item.descricao}
            url={item.url}
          />
        );
      })}
    </ContainnerLista>
  );
};

export default Lista;
