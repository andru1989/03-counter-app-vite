import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Tests in <CounterApp />', () => {
  const initialValue = 100;

  test('should match snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('should have the in initial value in 100', () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(initialValue).innerHTML).toBeTruthy();
  });

  test('should increase number by 1 to initial value', () => {
    render(<CounterApp value={initialValue} />);
    const newValue = initialValue + 1;
    const button = screen.getByText('+1');

    fireEvent.click(button);
    expect(screen.getByText(newValue)).toBeTruthy();
  });

  test('should decrease number by 1 to initial value', () => {
    render(<CounterApp value={initialValue} />);
    const newValue = initialValue - 1;
    const button = screen.getByText('-1');

    fireEvent.click(button);
    expect(screen.getByText(newValue)).toBeTruthy();
  });

  test('should initialize value with reset button', () => {
    render(<CounterApp value={initialValue} />);

    const resetButton = screen.getByRole('button', { name: 'btn-reset' });
    const decreaseButton = screen.getByText('-1');

    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);
    fireEvent.click(resetButton);

    expect(screen.getByText(initialValue)).toBeTruthy();
  });

});