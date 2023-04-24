import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests in <FirstApp />', () => {

  const title = 'Hi, my name is Andres';
  const subTitle = 'Subtitle test';

  test('should match snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the title Hi, my name is Andres', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('should show the title in h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  });

  test('should show the subtitle sent by props', () => {
    render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    );

    expect(screen.getByText(subTitle)).toBeTruthy();
  });

});