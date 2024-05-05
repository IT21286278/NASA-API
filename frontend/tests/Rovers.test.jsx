import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import Rovers from '../src/pages/MarsRoversPage';
import { ToastContextProvider } from '../src/context/ToastContext';
import { AuthContextProvider } from '../src/context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

describe('Rovers', () => {
  let component;

  beforeEach((user) => {
    component = render(
      <BrowserRouter>
        <ToastContextProvider>
          <AuthContextProvider value={{ user }}>
            <Rovers />
          </AuthContextProvider>
        </ToastContextProvider>
      </BrowserRouter>
    );
  });

  it('should render', () => {
    expect(component).toBeDefined();
  });

  it('should render the option', () => {
    const curiosityElements = component.getAllByText('Curiosity');
    expect(curiosityElements.length).toBeGreaterThan(0);
  });

  it('should render the option', () => {
    const perseveranceElements = component.getAllByText('Perseverance');
    expect(perseveranceElements.length).toBeGreaterThan(0);
  });

  it('should render the title', () => {
    const searchElements = component.getAllByText('Rover Name');
    expect(searchElements.length).toBeGreaterThan(0);
  });

  it('should render the title', () => {
    const searchElements = component.getAllByText('Mars Rover Photos');
    expect(searchElements.length).toBeGreaterThan(0);
  });

  it('should render the solar day', () => {
    const searchElements = component.getAllByText('Sol (Martian Solar Day)');
    expect(searchElements.length).toBeGreaterThan(0);
  });

  it('should render the button text', () => {
    const searchElements = component.getAllByText('Fetch Photos');
    expect(searchElements.length).toBeGreaterThan(0);
  });

  it('should render the pagination', () => {
    const searchElements = component.getAllByText('Previous');
    expect(searchElements.length).toBeGreaterThan(0);
  });

  it('should render the pagination', () => {
    const searchElements = component.getAllByText('Next');
    expect(searchElements.length).toBeGreaterThan(0);
  });
});
