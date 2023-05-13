import { FC } from 'react';
import Image from 'next/image';

import wave from '../images/svg/wave.svg';
import waveShadow from '../images/svg/wave-shadow.svg';
import styles from '../styles/Wave.module.scss';

const Wave: FC = () => {
  return (
    <>
        <Image className={styles.wave} src={wave} alt="wave, волна" />
        <Image className={styles['wave-shadow']} src={waveShadow} alt="wave, волна" />
    </>
  );
};

export default Wave;