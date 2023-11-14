import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin='anonymous'></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossOrigin='anonymous'></script>

      <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin='anonymous'></script>

      <script>var Alert = ReactBootstrap.Alert; </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
