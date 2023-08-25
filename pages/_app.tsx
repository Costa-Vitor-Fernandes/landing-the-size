
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <meta id="myViewport" name="viewport" content="width=380"/>
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
