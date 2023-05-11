import { FC } from 'react';
import Image from 'next/image';

import styles from '../styles/Trainer.module.scss';
import fedechkina from '../images/fedechkina-image.png';
import silnyh from '../images/silnyh-image.png';

import { ITrainer } from '@/utils/intefaces';
import { Trainers } from '@/utils/enums';


const Trainer: FC<ITrainer> = ({ trainer }) => {
  return trainer === Trainers.fedechkina ? (
    <article className={styles.trainer}>
        <Image src={fedechkina} alt="Федечкина Дарья" />
        <h2 className={styles['trainer-name']}>Федечкина Дарья Николаевна</h2>
        <p className={styles['trainer-desc']}>Легкая атлетика, 1-ый взрослый разряд</p>
    </article>
  ) : (
    <article className={styles.trainer}>
        <Image src={silnyh} alt="Сильных виктория" />
        <h2 className={styles['trainer-name']}>Сильных Виктория Александровна</h2>
        <p className={styles['trainer-desc']}>Легкая атлетика, 2-ый взрослый разряд</p>
    </article>
  );
};

export default Trainer;