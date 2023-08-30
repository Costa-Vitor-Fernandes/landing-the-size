import { ReactElement } from "react"
import { bebao } from "../pages"

export interface info {
    h1:string,
    p:ReactElement,
    span:string,
    button:string,
    smallText:string,
    h1Color: string,
    buttonColor:string,
    link: string,
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
        <a href={props.info.link}  className={`rounded-xl px-5 py-4 my-5 bg${props.info.buttonColor} text-white ml-4 shadow-lg `}>
       {props.info.span !== "" ?<span className="self-center text-xs text-white pl-0">{props.info.span}</span> : null } 
          {props.info.button}
        </a>
        </div>
      <span className="text-xs mt-2 ml-2 flex ">
        {props.info.smallText}
      </span>
      </div>
    </div>
)

}
