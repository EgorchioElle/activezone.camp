import { Inter } from 'next/font/google';
import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../images/svg/logo-icon.svg';
import styles from '../styles/Enroll.module.scss';


const inter = Inter({ subsets: ['latin'] });

const Enroll: FC = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Active zone, camp, детский лагерь, дневной лагерь, летний лагерь
          легкая атлетика, спорт, спортивный лагерь, записаться, смена" />
        <meta property="description" content="Запись в летний спортивный лагерь Active Zone на смену с 1 по 14 июля." />
        <meta name="Author" content="Савельев Егор Антонович" />
        <meta name="Copyright" content="ActiveZone 2023" />
        <title>Actice Zone: записаться на смену</title>
        <link rel="icon" href="/favicon.png" />
        {/* Facebook */}
        <meta property="og:locale" content="eng_Eng" />
        <meta property="og:title" content="Actice Zone: Детский спортивный лагерь в Качканаре" />
        <meta property="og:description" content="Запись в летний спортивный лагерь Active Zone на смену с 1 по 14 июля." />
        <meta property="og:site_name" content="ActiveZone.camp" />
      </Head>

      <main>
        <header className={styles.header + ' ' + inter.className}>
          <section className={styles.content}>
            <Link href="/" title="Вернуться на главную">
              <Image className={styles.logo} src={logo} alt="ActiveZone, camp, детский лагерь, спорт" />
            </Link>
            <h1 className={styles.title}>Запись в детский лагерь</h1>
            <p className={styles['paragraph-red']}>Отправьте письмо на электронную почту egorchioelle@gmail.com в таком формате</p>
            <ol className={styles.list}>
              <li className={styles['list-item']}>1. Ф.И.О ребенка</li>
              <li className={styles['list-item']}>2. Физическая подготовка ребенка</li>
              <li className={styles['list-item']}>3. Тариф</li>
              <p className={styles.prompt}>(если вы выбрали тариф PREMIUM, то напишите, что бы ребенок хотел на обед)</p>
            </ol>
            <p className={styles['paragraph-blue']}>Также вы можете обратиться по телефону +7 932 666-55-77</p>
            <footer className={styles.footer}>© Activezone camp, all rights reserved</footer>
          </section>
        </header>
      </main>
    </>
  );
};

export default Enroll;