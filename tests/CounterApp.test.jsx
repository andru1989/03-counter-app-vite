import { render, screen } from '@testing-library/react';
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

});