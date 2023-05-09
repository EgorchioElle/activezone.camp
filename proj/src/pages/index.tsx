import { Inter } from 'next/font/google';
import { FC } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';

import List from '@/components/List';
import Nav from '@/components/Nav';
import { CardStyles, FooterStyles, TitleStyles } from '@/utils/enums';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const Home: FC = () => {
  return (
    <>
      <Head>

      </Head>
      <Nav />
      <main className={styles.main + ' ' + inter.className}>
        <section className={styles.hero}>

        </section>
        <List
          title="Лагерь будет проводиться на базе"
          points={[
            'Стадион “Горняк” 8-й микрорайон, 5А, г.Качканар',
            '“Аллея спорта” 8-й микрорайон'
          ]}
          titleStyle={TitleStyles.red}
        />
        <Card cardStyle={CardStyles.premium} />
        <Footer footerStyle={FooterStyles.wave}/>
      </main>
    </>
  );
};

export default Home;
