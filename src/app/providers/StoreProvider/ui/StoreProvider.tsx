import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initalState?: DeepPartial<StateShema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initalState,
    } = props;

    const store = createReduxStore(initalState as StateShema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
