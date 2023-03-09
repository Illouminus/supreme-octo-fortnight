import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { StateShema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateShema>
}
export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;
    return render(
        <StoreProvider initalState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                {component}
            </MemoryRouter>
        </StoreProvider>,
    );
}
