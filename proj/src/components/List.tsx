import { FC } from 'react';

import { IList } from '@/utils/intefaces';

import styles from '../styles/List.module.scss';


const List: FC<IList> = ({ title, points, titleStyle }) => {
  return (
    <ul className={styles.list}>
      <h2 className={styles.title + ' ' + styles[titleStyle]}>{title}</h2>
      {
        points.map((point, index) => {
          return <li className={styles['list-item']} key={index}>+ {point}</li>;
        })
      }
    </ul>
  );
};

export default List;