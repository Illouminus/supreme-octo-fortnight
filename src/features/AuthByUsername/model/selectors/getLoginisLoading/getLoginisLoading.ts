import { StateShema } from 'app/providers/StoreProvider';

export const getLoginisLoading = (state: StateShema) => state?.loginForm?.isLoading || false;
