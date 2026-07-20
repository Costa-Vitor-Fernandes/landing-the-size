import { Inter, Roboto, Overpass } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

export const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });
export const robotao = Roboto({ weight: "500", subsets: ["latin"] });

export default function PoliticaDePrivacidade() {
  return (
    <main className={`flex flex-col min-h-screen ${inter.className} bg-gray-50`}>
      <Head>
        <title>Política de Privacidade - uSize</title>
      </Head>
      <div className="max-w-3xl mx-auto p-6 sm:p-12">
        <Link href="/" className="text-blue-600 underline mb-6 block">&larr; Voltar</Link>
        <h1 className={`${robotao.className} text-3xl mb-6`}>Política de Privacidade</h1>
        <p className="text-sm text-gray-500 mb-6">Última atualização: Julho de 2026</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Quem somos</h2>
          <p className="text-gray-700">
            O uSize é um provador virtual que ajuda lojas de moda a recomendar o tamanho ideal para seus clientes.
            Esta política se aplica à landing page e ao aplicativo web disponível em usize.vercel.app.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Dados coletados</h2>
          <p className="text-gray-700">Coletamos os seguintes dados pessoais:</p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Nome, email e telefone (via formulário de contato)</li>
            <li>Altura, peso, idade (para cálculo de IMC e recomendação de tamanho)</li>
            <li>Medidas corporais: busto, cintura e quadril (inseridas voluntariamente)</li>
            <li>Categoria da peça que está sendo consultada</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Finalidade do tratamento</h2>
          <p className="text-gray-700">Seus dados são utilizados exclusivamente para:</p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Recomendar o tamanho ideal de roupa com base nas suas medidas</li>
            <li>Responder a contatos e solicitações de demonstração</li>
            <li>Melhorar nosso algoritmo de recomendação (de forma agregada e anônima)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Base legal (LGPD)</h2>
          <p className="text-gray-700">
            Tratamos seus dados com base no consentimento (art. 7º, I da LGPD). Você pode revogar seu consentimento
            a qualquer momento entrando em contato pelo email abaixo.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Compartilhamento de dados</h2>
          <p className="text-gray-700">
            Não compartilhamos seus dados pessoais com terceiros. As informações de medidas são processadas
            localmente no seu navegador e enviadas apenas para nosso servidor para gerar a recomendação.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Armazenamento e segurança</h2>
          <p className="text-gray-700">
            Os dados são armazenados em servidores Vercel com criptografia em trânsito (HTTPS).
            Não armazenamos medidas corporais em banco de dados após a recomendação ser gerada.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Seus direitos</h2>
          <p className="text-gray-700">
            Você pode solicitar a qualquer momento: confirmação da existência de tratamento, acesso aos dados,
            correção, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade e revogação do consentimento.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Contato</h2>
          <p className="text-gray-700">
            Para exercer seus direitos ou tirar dúvidas: <strong>usize.web@gmail.com</strong>
          </p>
        </section>
      </div>
    </main>
  );
}
