import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('SideBar', () => {
    test('Presence', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });
    test('Toggle', () => {
        componentRender(<Sidebar />);
        const toggle = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        expect(screen.getByTestId('sidebar')).toHaveFocus();
    });
});
