import { FC } from 'react';
import Image from 'next/image';

import { ITariff } from '@/utils/intefaces';

import { TariffVariants } from '@/utils/enums';

import styles from '../styles/Card.module.scss';
import premiumCard from '../images/svg/premium-card.svg';
import standartCard from '../images/svg/standart-card.svg';



const Card: FC<ITariff> = ({ cardStyle }) => {
  return cardStyle === TariffVariants.premium ? (
    <Image className={styles.card} src={premiumCard} alt="тариф премиум, с обедом, premium" />
  ) : (
    <Image className={styles.card} src={standartCard} alt="тариф стандарт, без обеда, standart" />
  );
};

export default Card;