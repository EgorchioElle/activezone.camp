import { FC } from 'react';
import Image from 'next/image';

import { IFooter } from '@/utils/intefaces';

import { FooterStyles } from '@/utils/enums';

import footer from '../images/svg/footer.svg';

import styles from '../styles/Footer.module.scss';


const Footer: FC<IFooter> = ({ footerStyle = FooterStyles.default }) => {
  return (
    <footer className={styles.footer}>
      {footerStyle === FooterStyles.wave && <Image className={styles.wave} src={footer} alt="waves, волны" />}
      <p className={styles['footer-text']}>© Activezone camp, all rights reserved</p>
    </footer>
  );
};

export default Footer;