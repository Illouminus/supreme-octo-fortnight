import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('SideBar', () => {
    test('Presence', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });
    test('Toggle', () => {
        render(<Sidebar />);
        const toggle = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
