import { lazy } from 'react';

export const AboutAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Delete after
    setTimeout(() => resolve(import('./About')), 1500);
}));
