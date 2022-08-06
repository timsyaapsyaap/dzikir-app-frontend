import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="id">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="Dzikir App" />
          <meta name="theme-color" content="#26A2B2" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Dzikir App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="msapplication-navbutton-color" content="#26A2B2" />
          <meta name="msapplication-TileColor" content="#26A2B2" />
          <meta name="msapplication-TileImage" content="icon-144.png" />
          <meta name="msapplication-config" content="browserconfig.xml" />
          <meta name="application-name" content="Dzikir App" />
          <meta name="msapplication-tooltip" content="Tooltip Text" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />
          <meta name="nightmode" content="enable" />
          <meta name="layoutmode" content="fitscreen/standard" />
          <meta name="imagemode" content="force" />
          <meta name="screen-orientation" content="portrait" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="/favicon-16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/favicon-32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link
            href="/favicon-48.png"
            rel="icon"
            type="image/png"
            sizes="48x48"
          />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link
            href="/touch-icon-ipad.png"
            rel="apple-touch-icon"
            sizes="76x76"
          />
          <link
            href="/touch-icon-iphone-retina.png"
            rel="apple-touch-icon"
            sizes="120x120"
          />
          <link
            href="/touch-icon-ipad-retina.png"
            rel="apple-touch-icon"
            sizes="152x152"
          />
          <link
            href="/touch-icon-start-up-320x480.png"
            rel="apple-touch-startup-image"
          />
          <link href="/icon.svg" rel="mask-icon" color="#26A2B2" />
          <link href="/images/icons/icon-192.png" rel="icon" sizes="192x192" />
          <link href="/images/icons/icon-128.png" rel="icon" sizes="128x128" />
          <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          <link
            href="/icon-52x52.png"
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
          />
          <link href="/icon-72.png" rel="apple-touch-icon" sizes="72x72" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
