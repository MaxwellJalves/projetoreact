import React from "react";
import { ContainerCentral, Descricao } from "./styled";
import Bandeira from '../../assets/bandeiras/master.png'
interface ICaracteristicas {
  nome: string;
  dataVencimento: string | number;
  bandeira: string;
  visibilidade?: boolean
}

const mascara = {
  visivel: '0000 0000 0000 0000',
  bloqueado: '**** **** **** ****'
}

const anoVencimento = () => {
  const data = new Date()
  const anovencimento = data.getFullYear() + 4
  return (
    anovencimento.toString().substr(2)
  )
}
const Personalizar: React.FC<ICaracteristicas> = (props: ICaracteristicas) => {
  const { nome, dataVencimento, bandeira, visibilidade } = props;



  return (
    <div>

      <ContainerCentral>
        <span>{visibilidade != true ? mascara.bloqueado : mascara.visivel}</span>
      </ContainerCentral>
      <ContainerCentral>

        <p>{dataVencimento} / {anoVencimento()}</p>
        <p>{dataVencimento} / {anoVencimento()}</p>
        <img src={Bandeira} title={bandeira} />
      </ContainerCentral>
      <Descricao>{nome}</Descricao>
    </div>
  );
};

export default Personalizar;
