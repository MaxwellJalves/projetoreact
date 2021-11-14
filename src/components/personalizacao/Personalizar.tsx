import React from "react";

interface ICaracteristicas {
  nome: string;
  dataVencimento: string | number;
  bandeira: string;
}
const Personalizar: React.FC<ICaracteristicas> = (props: ICaracteristicas) => {
  const { nome, dataVencimento, bandeira } = props;
  return (
    <div>
      <span>0000 0000 0000 0000</span>
      <h2>{nome}</h2>
      <p>{dataVencimento}</p>
      <p>{bandeira}</p>
    </div>
  );
};

export default Personalizar;
