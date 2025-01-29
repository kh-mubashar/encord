import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Awesome Website</title>
        <meta
          name="description"
          content="Your amazing website description here"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
