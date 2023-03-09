import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StateShema {
    counter: CounterSchema
    user: UserSchema

    // Асинхронно будет подгружаться
    loginForm?: LoginSchema
}

export type StateShemaKey = keyof StateShema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateShema>;
    reduce: (state: StateShema, action: AnyAction) => CombinedState<StateShema>;
    add: (key: StateShemaKey, reducer: Reducer) => void;
    remove: (key: StateShemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateShema> {
    reducerManager : ReducerManager
}
