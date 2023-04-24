import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests in <FirstApp />', () => {

  // test('Match with snapshot', () => {
  //   const title = 'Hola Soy andres'
  //   const { container } = render(<FirstApp title={title} />)

  //   expect(container).toMatchSnapshot()
  // })

  test('should show title inside h1', () => {
    const title = 'Hola Soy andres';
    const { getByText, getByTestId } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('should show the subtitle sent by props', () => {
    const title = 'Hi my name is andres';
    const subTitle = 'Test subtitle';
    const { getByText } = render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    );

    expect(getByText(subTitle)).toBeTruthy();
  });

});