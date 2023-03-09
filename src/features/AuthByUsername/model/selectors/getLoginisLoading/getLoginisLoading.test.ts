import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { getLoginisLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginisLoading(state as StateShema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getLoginisLoading(state as StateShema)).toEqual(false);
    });
});
