import { Html, Head, Main, NextScript} from 'next/document'
import Script  from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta id="myViewport" name="viewport" content="width=380"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="uSize: Provador Virtual"/>
<meta name="twitter:description" content="Aprimore a experiência do seu e-commerce de moda com o uSize..."/>


<link rel="icon" href="https://usize.vercel.app/favicon.ico" type="image/x-icon"/>
<link rel="apple-touch-icon" href="https://usize.vercel.app/apple-touch-icon.png"/>


<link rel="canonical" href="https://usize.vercel.app"/>

<meta property="og:title" content="uSize: Provador Virtual"/>
<meta property="og:description" content="Aprimore a experiência do seu e-commerce de moda..."/>
<meta property="og:image" itemProp="image" content="https://usize.vercel.app/_next/image?url=%2FuSizeSymbol.png&w=384&q=75"/>
<meta property="og:image:width" content="384" />
<meta property="og:image:height" content="220" />
<meta property="og:image:type" content="image/png" />
<meta property="og:url" content="https://usize.vercel.app"/>
<meta property="og:type" content="website"/>
<meta property="og:locale" content="pt_BR"/>
<meta property="og:site_name" content="uSize: Provador Virtual"/>


      </Head>
<Script id="viewportFunction">{`
  window.onload = function () {
    var mvp = document.getElementById('myViewport');
    mvp.setAttribute('content','width=580');
}
  `}
</Script> 
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
