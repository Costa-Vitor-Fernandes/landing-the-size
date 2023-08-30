
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <meta id="myViewport" name="viewport" content="width=380"/>
    <meta property="og:title" content="iSize: Provador Virtual"/>
<meta property="og:description" content="Aprimore a experiência do seu e-commerce de moda com o iSize, a solução de provador virtual que elimina as dúvidas dos clientes e a sua logística de trocas e devoluções. Encontre seu tamanho perfeito usando suas medidas corporais. Experimente vender com iSize hoje e desfrute de uma experiência de venda online sem complicações."/>
<meta property="og:image" content="URL_da_sua_imagem_do_logotipo"/>
<meta property="og:url" content="http://isize-web.vercel.app"/>
<meta property="og:type" content="website"/>

<Script id="viewportFunction">{`
  window.onload = function () {
    var mvp = document.getElementById('myViewport');
    mvp.setAttribute('content','width=580');
}
  `}
</Script> 
  <Component {...pageProps} />
  </>
}
