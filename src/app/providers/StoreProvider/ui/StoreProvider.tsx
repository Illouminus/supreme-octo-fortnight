import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initalState?: DeepPartial<StateShema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initalState,
        asyncReducers,
    } = props;

    const store = createReduxStore(
        initalState as StateShema,
        asyncReducers as ReducersMapObject<StateShema>,
    );
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
