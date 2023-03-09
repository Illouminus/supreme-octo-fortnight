import { Story } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateShema>> = {
    loginForm: loginReducer,
};
export const StoreDecorator = (
    state: DeepPartial<StateShema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>,
) => (StoryComponent: Story) => (
    <StoreProvider
        initalState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
