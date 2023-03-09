import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                username: '123123',
            },
        };
        expect(getLoginUsername(state as StateShema)).toEqual('123123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getLoginUsername(state as StateShema)).toEqual('');
    });
});
