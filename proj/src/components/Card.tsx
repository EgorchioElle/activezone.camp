import { FC } from 'react';
import Image from 'next/image';

import styles from '../styles/Card.module.scss';
import premiumCard from '../images/svg/premium-card.svg';
import standartCard from '../images/svg/standart-card.svg';

import { ICard } from '@/utils/intefaces';
import { CardStyles } from '@/utils/enums';


const Card: FC<ICard> = ({ cardStyle }) => {
  return cardStyle === CardStyles.premium ? (
    <Image className={styles.card} src={premiumCard} alt="тариф премиум, с обедом, premium" />
  ) : (
    <Image className={styles.card} src={standartCard} alt="тариф стандарт, без обеда, standart" />
  );
};

export default Card;