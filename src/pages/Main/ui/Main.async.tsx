import { lazy } from 'react';

export const MainAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Delete after
    setTimeout(() => resolve(import('./Main')), 1500)
}))