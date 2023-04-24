import { render } from '@testing-library/react';
import { FirstApp } from "../src/FirstApp"

describe('Tests in <FirstApp />', () => {

  // test('Match with snapshot', () => {
  //   const title = 'Hola Soy andres'
  //   const { container } = render(<FirstApp title={title} />)

  //   expect(container).toMatchSnapshot()
  // })

  test('should show title inside h1', () => {
    const title = 'Hola Soy andres'
    const { container, getByText } = render(<FirstApp title={title} />)

    expect(getByText(title)).toBeTruthy()

    // const h1 = container.querySelector('h1')
    // expect(h1.innerHTML).toContain(title)
  })

})