import { CardStyles, FooterStyles, TitleStyles } from './enums';

export interface IList {
    title: string;
    points: string[];
    titleStyle: TitleStyles;
}

export interface ICard {
    cardStyle: CardStyles;
}

export interface IFooter {
    footerStyle?: FooterStyles;
}