import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Tests in 07-deses-arr', () => {

  test('should return a string and a number', () => {
    const [ letters, number ] = retornaArreglo()

    expect(letters).toBe('ABC')
    expect(number).toBe(123)

    expect(typeof letters).toBe('string')
    expect(typeof number).toBe('number')
  })

})