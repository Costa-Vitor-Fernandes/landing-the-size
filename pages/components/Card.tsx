import { ReactElement } from "react"
import { bebao } from ".."

export interface info {
    h1:string,
    p:ReactElement,
    span:string,
    button:string,
    smallText:string,
    h1Color: string,
    buttonColor:string,
}

export default function Card(props:{info:info}) {
    return(
    <div className="flex-col flex justify-between  bg-white ml-3 rounded-xl p-2 mb-5 mr-5 shadow-inner">
      <div className="my-2">
      <h1
        className={` text${props.info.h1Color} text-center text-3xl mb-5  ${bebao.className}`}
        >
        {props.info.h1}
      </h1>
       {props.info.p}
        </div>
      <div className="flex flex-col justify-center mr-5">
        <div className="flex justify-center">
        <button className={`rounded-xl px-5 py-4 my-5 bg${props.info.buttonColor} text-white ml-4 shadow-lg `}>
       {props.info.span !== "" ?<span className="self-center text-xs text-white pl-0">{props.info.span}</span> : null } 
          {props.info.button}
        </button>
        </div>
      <span className="text-xs mt-2 ml-2 flex ">
        {props.info.smallText}
      </span>
      </div>
    </div>
)

}
{/* <div className="bg-white ml-3 flex flex-col rounded-xl p-2 mb-5 mr-5">
<h1
  className={`text-yellow-500 text-center text-3xl p-2 ${bebao.className}`}
>
  Ouro
</h1>
<p>
  -Integração com seu E-Commerce{" "}
  <span className="text-xs">(prazo de 7 dias para instalação)</span>
</p>
<p>
  -3 categorias{" "}
  <span className="text-xs">(ex: Blusas, Calças e Vestidos)</span>
</p>
<p>
  -Até 10.000 visitas mensais{" "}
  <span className="text-xs">(no aplicativo)</span>
</p>
<p>
  -Fita Metrica personalizada{" "}
  <span className="text-xs">
    (um pdf para imprimir e montar sua fita e tirar suas medidas
    exatas)
  </span>
</p>
<p>
  -Google Analytics{" "}
  <span className="text-xs">
    (entenda que tipo de cliente acessou nosso aplicativo)
  </span>
</p>
<div className="flex flex-row justify-center mr-5">
  <p className="relative self-center">12x</p>
  <button className="rounded-xl px-2 py-4 bg-yellow-400 text-white">
    R$320
  </button>
</div>
<span className="text-xs mt-2 flex justify-end">
  Neste Preço está incluido a taxa de configuração diluida nas
  primeiras 12 parcelas. Depois do primeiro ano, 12xR$150
</span>
</div>
<div className="bg-white ml-3 flex flex-col rounded-xl p-2 mb-5 mr-5">
<h1
  className={`text-gray-500 text-center text-3xl p-2 ${bebao.className}`}
>
  Diamante
</h1>
<p>
  -Integração com seu E-Commerce{" "}
  <span className="text-xs">(prazo de 7 dias para instalação)</span>
</p>
<p>-Categorias ilimitadas</p>
<p>
  -Visitas mensais ilimitadas{" "}
  <span className="text-xs">(no aplicativo)</span>
</p>
<p>
  -Fita Metrica personalizada{" "}
  <span className="text-xs">
    (um pdf para imprimir e montar sua fita e tirar suas medidas
    exatas)
  </span>
</p>
<p>
  -Google Analytics{" "}
  <span className="text-xs">
    (entenda que tipo de cliente acessou nosso aplicativo)
  </span>
</p>
<p>-Suporte Gratuito</p>
<p>-Design Exclusivo</p>
<button className="rounded-xl self-center p-5 m-5 bg-green-400 text-white">
  Converse com nossa equipe
</button>
</div> */}