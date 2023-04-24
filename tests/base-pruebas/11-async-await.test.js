import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Tests in 11-async-await', () => {

  test('getImagen should return an URL image', async() => {
    const url = await getImagen();

    expect(typeof url).toBe('string')
  })

  test('getImagen should return an error message', async() => {
    const fakeApiKey = '1jj12kj123jk13k'
    const response = await getImagen(fakeApiKey);

    expect(response).toBe('No se encontro la imagen')
  })

})