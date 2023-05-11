import { Inter } from 'next/font/google';
import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';

import stadium from '../images/stadium-image.png';
import alley from '../images/alley-image.png';
import fedechkina from '../images/fedechkina-image.png';
import silnyh from '../images/silnyh-image.png';

import List from '@/components/List';
import Nav from '@/components/Nav';
import { CardStyles, FooterStyles, TitleStyles, Trainers } from '@/utils/enums';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Trainer from '@/components/Trainer';


const inter = Inter({ subsets: ['latin'] });

const Home: FC = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="Active zone, camp, daycamp, summer camp, детский лагерь, дневной лагерь, летний лагерь
          легкая атлетика, спорт, спортивный лагерь" />
          <meta property="description" content="Хотите, чтобы ваш ребенок провел время с пользой пока вы на работе?
          Тогда доброй пожаловать в летний спортивный лагерь Actize Zone! Здесь ваш ребенок не просто хорошо потренеруется,
          но и вкусно покушает, поучаствует в спортивных мероприятиях на ценный призы и зведет много друзей! Ждем вас на смене с 1 по 14 июля!" />
          <meta name="Author" content="Савельев Егор Антонович" />
          <meta name="Copyright" content="ActiveZone 2023" />
          <title>Actice Zone: Детский спортивный лагерь в Качканаре</title>
          <link rel="icon" href="/favicon.ico" />
          {/* Facebook */}
          <meta property="og:locale" content="eng_Eng" />
          <meta property="og:title" content="Actice Zone: Детский спортивный лагерь в Качканаре" />
          <meta property="og:description" content="Хотите, чтобы ваш ребенок провел время с пользой пока вы на работе?
          Тогда доброй пожаловать в летний спортивный лагерь Actize Zone! Здесь ваш ребенок не просто хорошо потренеруется,
          но и вкусно покушает, поучаствует в спортивных мероприятиях на ценный призы и зведет много друзей! Ждем вас на смене с 1 по 14 июля!" />
          <meta property="og:site_name" content="ActiveZone.camp" />
        </Head>
      <Nav />
      <main className={styles.main + ' ' + inter.className}>
        <header className={styles.hero}>
          <div className={styles['hero-text']}>
            <h1 className={styles.title}>Детский спортивный лагерь</h1>
            <h2 className={styles.subtitle}>Дневного пребывания</h2>
          </div>    
        </header>
        <div className={styles.wrapper}>
          <section className={styles['location-and-inventory']}>
            <div className={styles.lists}>
              <h1 className={styles['lists-title']}>Расположение и инвентарь</h1>
              <List
                title="Лагерь будет проводиться на базе"
                points={[
                  'Стадион “Горняк” 8-й микрорайон, 5А, г.Качканар',
                  '“Аллея спорта” 8-й микрорайон'
                ]}
                titleStyle={TitleStyles.red}
              />
              <List
                title="В распоряжении детей будут"
                points={[
                  'Футбольные, баскетбольные и волейбольные мячи',
                  'Обручи, скакалки, различные головные уборы',
                  'Вода и стаканчики'
                ]}
                titleStyle={TitleStyles.blue}
              />
            </div>
            <Image className={styles.image} src={stadium} alt="стадион Горняк, Качканар" />
          </section>      
          <section className={styles['day-timetable']}>
            <Image className={styles.image} src={alley} alt="Аллея Спорта, Качканар" />
            <div className={styles.lists}>
              <h1 className={styles['lists-title']}>Как будет проходить день</h1>
              <List
                title="9:00 - 10:30"
                points={[
                  'Линейка',
                  'Утренняя зарядка и физические упражнения'
                ]}
                titleStyle={TitleStyles.red}
              />
              <List
                title="10:30 - 11:00"
                points={[
                  'Обед',
                  'Перерыв'
                ]}
                titleStyle={TitleStyles.blue}
              />
              <List
                title="11:00 - 12:00"
                points={[
                  'Игры на свежем воздухе',
                  'Проведение спортивных мероприятий'
                ]}
                titleStyle={TitleStyles.red}
              />
            </div>
          </section>      
          <section className={styles.trainers}>
            <h1 className={styles['pre-title']}>Тренера</h1>
            <div className={styles['trainers-section']}>
              <Trainer trainer={Trainers.fedechkina} />
              <Trainer trainer={Trainers.silnyh} />
            </div>
          </section>      
          <section className={styles.trainers}>
            <h1 className={styles['pre-title']}>Тарифы</h1>
            <div className={styles['trainers-section']}>
              <Card cardStyle={CardStyles.premium} />
              <Card cardStyle={CardStyles.standart} />
            </div>
          </section>      
          <Footer footerStyle={FooterStyles.wave}/>
        </div>
      </main>
    </>
  );
};

export default Home;
