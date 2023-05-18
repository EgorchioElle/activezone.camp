import { TariffVariants } from './enums';

export type TypeFormState = {
    fullName: string;
    numberOrEmail: string;
    tariff: TariffVariants | string;
    isSubmit: boolean;
}