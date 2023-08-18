import Image from "next/image";
import { Overpass, Inter, Roboto } from "next/font/google";
import AnimatedText from "./components/AnimatedText";
import InfiniteLooper from "./components/InfiniteLooper";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });
const robotao = Roboto({ weight: "500", subsets: ["latin"] });
const bebas = Overpass({ weight: "400", subsets: ["latin"] });
const bebao = Overpass({ weight: "600", subsets: ["latin"] });
const images = [
  "/integra/tray.png",
  "/integra/magento.png",
  "/integra/wp.png",
  "/integra/nuvemshop.png",
  "/integra/woocomerce_trans.png",
  "/integra/wix.png",
];

export default function Home() {
  return (
    <main className={`flex flex-col ${inter.className}`}>
      <nav
        className="flex justify-between 
      p-6"
      >
        <div className="flex flex-col">
          <Image
            className="relative"
            alt="logo"
            src={"/iSizeSymbol.png"}
            height={150}
            width={150}
          ></Image>
          <h1
            className={`text-center  text-5xl text-black opacity-90 pl-2 ${robotao.className}`}
          >
            iSize
          </h1>
        </div>
        <div className="sm:justify-around sm:flex-row flex-col self-center items-center flex min-w-[50%]">
          <a>Sobre</a>
          <a>Contato</a>
        </div>
      </nav>
      <div className="flex flex-col justify-center sm:flex-row ">
        <div className="z-10 mt-6 flex flex-col items-center opacity-100">
          <AnimatedText />
          <div className="flex max-w-xl mt-10  ml-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.55)]">
            <button className=" bg-black rounded-lg text-white p-10 mb-10 ">
              Agende uma Demonstração
            </button>
          </div>
        </div>
        <div className="flex sm:flex min-w-[35%] relative sm:bottom-18 ml-2  justify-center items-center">
          <Image
            className="z-20"
            src={"/blankPhone.png"}
            alt="phone"
            height={300}
            width={300}
          />
          <div className="absolute">
            <div className="relative">
              <Image
                src={"/dollPagephone.png"}
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
        <div className="flex flex-col mt-5 justify-around sm:flex-row">
          <div>
            <h3 className="p-5 sm:p-0">Nosso Objetivo é te dar :</h3>
            <p>-Menos Gastos com Trocas e Devoluções</p>
            <p>-Menos Logística de estoque</p>
            <p>-Menos Tempo de atendimento</p>
            <p>-Menos Filas no provador</p>
          </div>
          <div>
            <h3 className="p-5 sm:p-0">Seus clientes vão ganhar :</h3>
            <p>-Mais Confiança ao comprar </p>
            <p>-Mais Conforto</p>
            <p>-Mais Tempo para olhar mais produtos</p>
          </div>
        </div>
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
      <div className="flex flex-col mt-10 mx-8 bg-neutral-100 shadow-lg px-5 rounded-2xl">
        <h1 className={`text-2xl mt-10 ${robotao.className}`}>
          Como funciona?
        </h1>
        <p className={`p-5 mb-5 ${roboto.className}`}>
          iSize é um aplicativo web de provador virtual de roupas. Utilizando a
          tabela de medidas das roupas da sua loja, nosso algoritmo vai colher
          as medidas do usuário e retornar um tamanho recomendado otimizado,
          gerando mais assertividade ao comprar, diminuindo as trocas,
          devoluções e sua logística de estoque.
        </p>
      </div>

      <div className="flex bg-neutral-700 p-5 flex-col mt-10">
        <h1 className="text-white text-5xl text-center mb-6">
          Planos de Assinatura
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col bg-white ml-3 rounded-xl p-2 mb-5 mr-5">
            <h1
              className={` text-gray-400 text-center text-3xl p-2 ${bebao.className}`}
            >
              Prata
            </h1>
            <p>
              -Sem integração{" "}
              <span className="text-xs">
                (para vendas feitas através do Instagram, Facebook, WhatsApp,
                Telegram etc..)
              </span>
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
            <div className="flex flex-row justify-center mr-5">
              <p className="relative self-center">12x</p>
              <button className="rounded-xl px-2 py-4 bg-gray-400 text-white">
                R$150
              </button>
            </div>
            <span className="text-xs mt-2 flex justify-end">
              Neste Preço está incluido a taxa de configuração diluida nas
              primeiras 12 parcelas. Depois do primeiro ano, 12xR$50
            </span>
          </div>
          <div className="bg-white ml-3 flex flex-col rounded-xl p-2 mb-5 mr-5">
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
          </div>
        </div>
      </div>

      <div className="mt-10">Formulario de contato</div>
    </main>
  );
}
