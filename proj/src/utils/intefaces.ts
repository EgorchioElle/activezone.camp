import { TariffVariants, FooterStyles, TitleStyles, Trainers } from './enums';

export interface IList {
    title: string;
    points: string[];
    titleStyle: TitleStyles;
}

export interface ITariff {
    cardStyle: TariffVariants;
}

export interface IFooter {
    footerStyle?: FooterStyles;
}

export interface ITrainer {
    trainer: Trainers;
}