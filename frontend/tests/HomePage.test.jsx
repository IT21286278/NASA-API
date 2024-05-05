import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../src/pages/HomePage';
import { AuthContextProvider } from '../src/context/AuthContext';
import * as reactRouterDom from 'react-router-dom';
import { ToastContextProvider } from '../src/context/ToastContext';
// Mocking the necessary hooks and context
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'), // Import then override
  useNavigate: vi.fn(),
  useLocation: () => ({ pathname: '/Homepage' }),
}));

// Provide default values for context and hooks
const mockNavigate = vi.fn();
reactRouterDom.useNavigate.mockImplementation(() => mockNavigate);

// Utility to render the component with context
const renderWithAuthContext = (user) => {
  return render(
    <ToastContextProvider>
      <AuthContextProvider value={{ user }}>
        <HomePage />
      </AuthContextProvider>
    </ToastContextProvider>
  );
};

describe('HomePage', () => {
  it('renders correctly when user is authenticated', () => {
    const user = { name: 'Jane Doe', loggedIn: true };
    renderWithAuthContext(user);
    expect(screen.getByText(/picture of the day/i)).toBeInTheDocument();
    expect(screen.getByText(/explore mars/i)).toBeInTheDocument();
    expect(screen.getByText(/earth imagery/i)).toBeInTheDocument();
  });

  it('redirects if user is not authenticated', () => {
    renderWithAuthContext(null); // null represents no user logged in
    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });
  });
});
