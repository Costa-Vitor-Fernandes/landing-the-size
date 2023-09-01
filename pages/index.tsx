import Image from "next/image";
import { Overpass, Inter, Roboto } from "next/font/google";
import AnimatedText from "../components/AnimatedText";
import InfiniteLooper from "../components/InfiniteLooper";
import ContactForm from "../components/ContactForm";
import { useState , useRef} from "react";
import Card from "../components/Card";
import { gsap } from "gsap";
import ColorTest from "../components/ColorTest";
import { FlippingButton } from "@/components/FlippingButton";
import Link from "next/link";
export const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });
export const robotao = Roboto({ weight: "500", subsets: ["latin"] });
export const bebas = Overpass({ weight: "400", subsets: ["latin"] });
export const bebao = Overpass({ weight: "600", subsets: ["latin"] });
export const images = [
  "/integra/tray.png",
  // "/integra/magento.png",
  "/integra/wp.png",
  "/integra/nuvemshop.png",
  "/integra/woocomerce_trans.png",
  // "/integra/wix.png",
];

const cardInfoSilver = {
  h1: "Prata",
  p: (
    <div>
      <p>
        -Sem integração{" "}
        <span className="text-xs">
          (para vendas feitas através do Instagram, Facebook, WhatsApp, Telegram
          etc..)
        </span>
      </p>
      <p>
        -3 modelagens{" "}
        <span className="text-xs">(ex: Blusas, Calças e Vestidos)</span>
      </p>
      <p>
        -Até 10.000 visitas mensais{" "}
        <span className="text-xs">(no aplicativo)</span>
      </p>
      <p>
        -Fita Metrica personalizada{" "}
        <span className="text-xs">
          (um pdf para imprimir e montar sua fita e tirar suas medidas exatas)
        </span>
      </p>
    </div>
  ),
  span: "12x",
  button: "R$149,99",
  link: 'https://pay.infinitepay.io/uSize/1799,90/',
  smallText:
    "Neste Preço incluimos a taxa de instalação inicial diluida nas primeiras 12 parcelas. Depois do primeiro ano, 12xR$79,99",
  h1Color: "-gray-400",
  buttonColor: "-gray-400",
};
const cardInfoGold = {
  h1: "Ouro",
  p: (
    <div>
      <p>
        -Integração com seu E-Commerce{" "}
        <span className="text-xs">(prazo de 7 dias para instalação)</span>
      </p>
      <p>
        -3 modelagens{" "}
        <span className="text-xs">(ex: Blusas, Calças e Vestidos)</span>
      </p>
      <p>
        -Até 10.000 visitas mensais{" "}
        <span className="text-xs">(no aplicativo)</span>
      </p>
      <p>
        -Fita Metrica personalizada{" "}
        <span className="text-xs">
          (um pdf para imprimir e montar sua fita e tirar suas medidas exatas)
        </span>
      </p>
      <p>
        -Google Analytics{" "}
        <span className="text-xs">
          (entenda que tipo de cliente acessou nosso aplicativo)
        </span>
      </p>
    </div>
  ),

  span: "12x",
  button: "R$319,99",
  smallText:
    "Neste Preço incluimos a taxa de instalação inicial diluida nas primeiras 12 parcelas. Depois do primeiro ano, 12xR$79,99",
  h1Color: "-yellow-400",
  buttonColor: "-yellow-400",
  link: 'https://pay.infinitepay.io/uSize/3839,88/'

};
const cardInfoDiamond = {
  h1: "Diamante",
  h1Color: "-gray-300",
  p: (
    <div>
      <p>
        -Integração com seu E-Commerce{" "}
        <span className="text-xs">(prazo de 7 dias para instalação)</span>
      </p>
      <p>-Modelagens ilimitadas</p>
      <p>
        -Visitas mensais ilimitadas{" "}
        <span className="text-xs">(no aplicativo)</span>
      </p>
      <p>
        -Fita Metrica personalizada{" "}
        <span className="text-xs">
          (um pdf para imprimir e montar sua fita e tirar suas medidas exatas)
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
    </div>
  ),
  span: "",
  button: "Converse com nossa equipe",
  smallText: "",
  link: '#contato',
  buttonColor: "-green-400",
};

export default function Home() {
  const [modal, setModal] = useState<boolean>(false);
  const sobreRef = useRef(null)
  const contatoRef = useRef(null)

  const handleModal = () => {
    setModal(!modal);
    // console.log("flip");
  };

  return (
    <main className={`flex flex-col ${inter.className}`}>
      <title>uSize - Provador Virtual</title>
      {modal ? (
        <div
          className="fixed min-w-[100%] bg-[rgba(0,0,0,0.4)] h-full z-50 shadow-2xl"
          onClick={() => handleModal()}
        >
          <iframe
            src="https://the-size-picker.vercel.app/teste?categoria=Calça"
            width={"90%"}
            height={"95%"}
            className="mx-auto my-4 z-60"
          ></iframe>
        </div>
      ) : null}
      
      <nav
        className="flex justify-between 
      p-6"
      >
        <div className="flex flex-col">
          <Image
            className="relative"
            alt="logo"
            src={"/uSizeSymbol.png"}
            height={150}
            width={150}
          ></Image>
          <h1
            className={`text-center  text-5xl text-black opacity-90 pl-2 ${robotao.className}`}
          >
            uSize
          </h1>
        </div>
        <div className="sm:justify-around sm:flex-row flex-col self-center items-center flex min-w-[50%]">
          <Link href="#sobre">
          Sobre
          </Link>
          <Link href="#contato">
          Contato
          </Link>

        </div>
      </nav>
      <div className="flex flex-col justify-center sm:flex-row ">
        <div className="z-10  mt-6 flex flex-col items-center opacity-100">
          <AnimatedText />
          <div className="flex max-w-xl mt-10   ml-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.55)]">
            <FlippingButton/>
          </div>
        </div>
        <div className="flex sm:flex min-w-[35%] relative sm:bottom-18 ml-2  justify-center items-center">
          <Image
          priority

            className="z-20"
            src={"/blankPhone.png"}
            alt="phone"
            height={300}
            width={300}
          />
          <div className="absolute">
            <div className="relative">
              <Image
              priority
                src={"/dollPage_phonenew.gif"}
                alt="app_DollPage"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 rounded-2xl ml-2 shadow-2xl py-6 px-5">
        <h2 className={`text-4xl text-center ${bebas.className} m-5`}>
          Com um toque de tecnologia, encontramos o tamanho ideal para seu
          cliente !
        </h2>
      </div>
      <div className="flex flex-col mt-20">
        <h1 className={`${robotao.className} text-center text-5xl`}>
          Integrado com seu E-Commerce
        </h1>
        <div className=" min-w-full mt-10">
          <InfiniteLooper speed={8} direction="left">
            {images.map((v, i) => (
              <Image key={i} src={v} alt={v} height={50} width={150}></Image>
            ))}
          </InfiniteLooper>
        </div>
      </div>
      <div ref={sobreRef} id="sobre" className="flex flex-col mt-10 mx-8 bg-neutral-100 shadow-lg px-5 rounded-2xl">
        <h1 className={`text-2xl mt-10 ${robotao.className}`}>Sobre</h1>
        <p className={`p-5 mb-5 ${roboto.className}`}>
          uSize é um aplicativo web de provador virtual de roupas. Utilizando a
          tabela de medidas das roupas da sua loja, nosso algoritmo vai colher
          as medidas do usuário e retornar um tamanho recomendado otimizado,
          trazendo mais assertividade ao comprar.
        </p>
      </div>
      <div className="flex flex-col mt-10 mx-8 bg-neutral-100 shadow-lg px-5 rounded-2xl">
        <h1 className={`text-2xl mt-10 ${robotao.className}`}>Reduzindo a sua logística</h1>
        <p className={`p-5 mb-5 ${roboto.className}`}>
          Lojas usando o provador virtual uSize têm uma significativa redução nas taxas de devoluções e trocas (até -50%). Menos gastos com frete, menos tempo gerenciando estoque. Mais clientes satisfeitos que voltam pra comprar mais
        </p>
      </div>
      
      <div className="flex flex-col mt-10 mx-8 bg-neutral-100 shadow-lg px-5 rounded-2xl">
        <h1 className={`text-2xl mt-10 ${robotao.className}`}>
          Como Funciona a Integração?
        </h1>
        <p className={`p-5 mb-5 ${roboto.className}`}>
          Vamos inserir um botão como esse abaixo dentro da página de produto do
          seu site. Nosso algoritmo vai identificar automaticamente a foto do
          produto,sua categoria e sua tabela de medidas, retornando um tamanho otimizado pra cada tipo
          de peça da sua loja.
        </p>
        <button
          className=" self-center flex shadow-xl rounded-md px-5 py-2 mb-10 text-xl"
          onClick={() => handleModal()}
        >
          <Image
            className="relative top-2 right-1"
            src={"/uSizeSymbol.png"}
            width={25}
            height={40}
            alt="uSize hanger icon"
          />
          Provador Virtual
        </button>
      </div>
      <div className="flex flex-col mt-10 mx-8 bg-neutral-100 shadow-lg px-5 rounded-2xl">
        <h1 className={`text-2xl mt-10 ${robotao.className}`}>Fita Métrica Personalizada</h1>
        <p className={`p-5 mb-5 ${roboto.className}`}>
         Seu cliente não sabe as próprias medidas? Vamos disponibilizar um pdf personalizado com sua marca, com instruções para imprimir e montar uma fita métrica. Assim podemos eliminar qualquer dúvida do seu cliente quanto ao caimento da roupa com o nosso modo &quot;Medidas Exatas&quot;
        </p>
      </div>


      <div className="flex bg-neutral-700 p-5 flex-col mt-10">
        <h1 className="text-white text-5xl text-center mb-6">
          Planos de Assinatura
        </h1>
        <div className="flex flex-col lg:flex-row">
          <Card info={cardInfoSilver} />
          <Card info={cardInfoGold} />
          <Card info={cardInfoDiamond} />
        </div>
      </div>

      <ContactForm />
    <ColorTest></ColorTest>
    </main>
  );
}

export async function getServerSideProps() {
  return { props: { data: "data" } };
}