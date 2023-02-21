import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('test presence', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('test presence', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
