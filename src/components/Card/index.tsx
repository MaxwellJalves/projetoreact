
import { Containner, Descricao, ComponenteFilho } from "./style";

interface ICard {
  id: string | number;
  descricao: string;
  url: string;
}

const Card = (value: ICard) => {
  const { id, descricao, url } = value;

  console.log(`Debug Card = ${id}   ${descricao}  | ${url}`)
  return (
    <Containner>
      <ComponenteFilho>
        <p>Codigo : {id}</p>
        <Descricao>{descricao}</Descricao>
        <span>{url}</span>
      </ComponenteFilho>
    </Containner>
  );
};
export default Card;
