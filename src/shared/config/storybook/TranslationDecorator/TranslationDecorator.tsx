import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { Suspense } from 'react';
import i18n from 'shared/config/i18n/i18n';

export const TranslationDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback="">
            <StoryComponent />
        </Suspense>
    </I18nextProvider>
);
