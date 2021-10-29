import React from 'react'
import { ContainerHome, ContainerLayout, Header } from './style'
import './style.ts'
interface IMessage{
    titulo?: string
}
const WebDevelopment  = (props : IMessage)=>{
    const {titulo } = props
    return(
        <ContainerHome>
            <Header  />
            <ContainerLayout> 

            <div className="sidenav"><h1>{titulo}</h1></div>
            <div className="item"><img src="https://a-static.mlcdn.com.br/210x210/smart-tv-55-4k-neo-qled-mini-led-samsung-55qn85a-120hz-som-em-movimento-processador-ai/magazineluiza/193443900/e852e29c1fdb5931446278b57255029c.jpg" alt="" /><p>Televisão</p></div>
            <div className="item"><img src="https://a-static.mlcdn.com.br/210x210/notebook-asus-x515jf-ej153t-intel-core-i5-8gb-256g-ssd-156-full-hd-placa-de-video-2gb-windows-10/magazineluiza/230019500/ec5c184967940709dbd5e573082137e8.jpg" alt="" /><p>Notebook</p></div>
            <div className="item"><img src="https://a-static.mlcdn.com.br/210x210/monitor-gamer-75hz-full-hd-25-lg-25um58g-ips-hdmi-1ms/magazineluiza/226704800/b1a986e0f0e5cb580b9893ca66604e20.jpg" alt="" /><p>Monitor </p></div>
            <div className="item"><img src="https://a-static.mlcdn.com.br/210x210/ar-condicionado-split-samsung-inverter-9-000-btus-quente-e-frio-wind-free-ar09tshcbwknaz/magazineluiza/226598200/4bdb3c55b079db034703e96e9824dd89.jpg" alt="" /><p>Ar-condicionado</p></div>
            <div className="item"><img src="https://a-static.mlcdn.com.br/280x210/sofa-4-lugares-net-jobim-assento-retratil-e-reclinavel-cinza-230m-l-netsofas/netsofas02/job170104/a74c25225f8dc9f7120bc4ab527f538a.jpg" alt="" /><p>Sofá</p></div>
            <div className="item"><img src="https://a-static.mlcdn.com.br/280x210/jogo-de-cama-casal-6-pecas-com-edredom-e-lencol-casa-dona/tudodelar/36988/5d4f2b3afff0dc48b0df5255d80f90a6.jpg" alt="" /><p>Cama</p></div>
            <div className="footer"></div>
            </ContainerLayout>
        
        </ContainerHome>
    )
}

export default WebDevelopment