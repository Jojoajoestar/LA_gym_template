import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Premium fitness gym in Los Angeles offering a variety of classes and top-notch facilities." />
        <meta name="keywords" content="gym, fitness, Los Angeles, yoga, pilates, HIIT, spin class" />
        <meta name="author" content="LA Gym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
