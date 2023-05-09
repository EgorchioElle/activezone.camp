import { Inter } from 'next/font/google';
import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Nav.module.scss';
import logo from '../images/svg/logo-icon.svg';


const inter = Inter({ subsets: ['latin'] });

const Nav: FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  return (
    <nav className={styles.nav + ' ' + inter.className}>
      <Image className={styles.logo} src={logo} alt="ActiveZone, camp, детский лагерь, спорт" />
      <Link className={styles.button} href="/enroll">Записаться</Link>

      <div onClick={() => setModalOpen(!modalOpen)} className={modalOpen ? styles.burger + ' ' + styles['burger-close'] : styles.burger}>
        <span className={styles['span-1']}></span>
        <span className={styles['span-2']}></span>
        <span className={styles['span-3']}></span>
      </div>
      
      <section className={modalOpen ? styles.modal + ' ' + styles['modal-open'] : styles.modal + ' ' + styles['modal-closed']}>
        <Link className={styles['modal-button']} href="/enroll">Записаться</Link>
      </section>
    </nav>
  );
};

export default Nav;