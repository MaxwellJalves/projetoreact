import { Descricao, ComponenteFilho, Imagem } from "./style";

interface ICard {
  id: string | number;
  descricao: string;
  url: string;
}

const Card = (value: ICard) => {
  const { id, descricao, url } = value;

  console.log(`Debug Card = ${id}   ${descricao}  | ${url}`);
  return (
    <ComponenteFilho>
      <p>Codigo : {id}</p>
      <Descricao>{descricao}</Descricao>
      <Imagem src={url} />
    </ComponenteFilho>
  );
};
export default Card;
