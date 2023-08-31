
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <meta id="myViewport" name="viewport" content="width=380"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="uSize: Provador Virtual"/>
<meta name="twitter:description" content="Aprimore a experiência do seu e-commerce de moda com o uSize..."/>
{/* <meta name="twitter:image" content="https://usize-web.vercel.app/twitter-card-image.png"/> */}

<link rel="icon" href="https://usize-web.vercel.app/favicon.ico" type="image/x-icon"/>
<link rel="apple-touch-icon" href="https://usize-web.vercel.app/apple-touch-icon.png"/>


<link rel="canonical" href="https://usize-web.vercel.app"/>

<meta property="og:title" content="uSize: Provador Virtual"/>
<meta property="og:description" content="Aprimore a experiência do seu e-commerce de moda..."/>
<meta property="og:image" content="https://usize-web.vercel.app/uSizeSymbol.png"/>
<meta property="og:url" content="https://usize-web.vercel.app"/>
<meta property="og:type" content="website"/>
<meta property="og:locale" content="pt_BR"/>
<meta property="og:site_name" content="uSize: Provador Virtual"/>


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
