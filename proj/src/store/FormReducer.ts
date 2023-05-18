import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TypeFormState } from '@/utils/types';
import { TariffVariants } from '@/utils/enums';
import handler from '@/pages/api/mailer';

const initialState: TypeFormState = {
    fullName: '',
    numberOrEmail: '',
    tariff: TariffVariants.standart,
    isSubmit: false
};

const formSlice = createSlice({
    name: 'FormReducer',
    initialState,
    reducers: {
        setFullName: (state, action: PayloadAction<string>) => {
            state.fullName = action.payload;
        },
        setNumberOrEmail: (state, action: PayloadAction<string>) => {
            state.numberOrEmail = action.payload;
        },
        setTariff: (state, action: PayloadAction<TariffVariants | string>) => {
            state.tariff = action.payload;
        },
        setIsSubmit: (state, action: PayloadAction<boolean>) => {
            state.isSubmit = action.payload;
            handler;
        }
    }
});

export default formSlice.reducer;
export const { setFullName, setNumberOrEmail, setTariff, setIsSubmit } = formSlice.actions;