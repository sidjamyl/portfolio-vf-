import '../styles/globals.css';
import Head from 'next/head';

import Layout from '../components/Layout';
import Transition from '../components/Transition';

import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio de Sid Jamyl et Medjani Mehdi - Création de contenu digital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
