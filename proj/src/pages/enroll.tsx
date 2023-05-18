import { Inter } from 'next/font/google';
import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';

import { ChangeEvent } from 'react';

import { RootState } from '@/store';

import { setFullName, setIsSubmit, setNumberOrEmail, setTariff } from '@/store/FormReducer';

import { TariffVariants } from '@/utils/enums';

import checkmark from '../images/svg/check-mark.svg';

import logo from '../images/svg/logo-icon.svg';
import styles from '../styles/Enroll.module.scss';





const inter = Inter({ subsets: ['latin'] });

const Enroll: FC = () => {
  const { fullName, numberOrEmail, tariff, isSubmit } = useSelector((state: RootState) => state.form) || {};
  const dispatch = useDispatch();

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
            {!isSubmit &&
              <>
                <h1 className={styles.title}>Запись в детский лагерь</h1>
                <form method="GET" onSubmit={() => dispatch(setIsSubmit(true))}>
                  <div className={styles['user-box']}>
                    <input type="text" required value={fullName}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setFullName(e.target.value))} />
                    <label>Ваше ФИО</label>
                  </div>
                  <div className={styles['user-box']}>
                    <input type="text" required value={numberOrEmail}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setNumberOrEmail(e.target.value))} />
                    <label>Номер или пароль</label>
                  </div>
                  <select className={styles.select} onChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch(setTariff(e.target.value))}>
                    <option value={TariffVariants.standart} selected={tariff === TariffVariants.standart}>Тариф Standart</option>
                    <option value={TariffVariants.premium} selected={tariff === TariffVariants.premium}>Тариф Premium</option>
                  </select>
                  <p className={styles.paragraph}>Мы свяжемся с вами через WhatsApp или напишем на вашу электронную почту</p>
                  <button type="submit" className={styles.button}>Отправить</button>
                </form>
              </>
            }
            {isSubmit &&
              <div className="animate-fade-in flex flex-col justify-center items-center">
                <Image src={checkmark} alt="checkmark, зеленая галочка" />
                <p className="text-white text-center">Ваша заявка была принята, скоро мы с вами свяжемся!</p>
              </div>
            }
          </section>
        </header>
        <footer className={styles.footer}>© Activezone camp, all rights reserved</footer>
      </main>
    </>
  );
};

export default Enroll;