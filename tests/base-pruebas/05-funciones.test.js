import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Tests in 05-funciones', () => {

  test('getUser should return an object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'andru1989'
    }

    const user = getUser();

    expect(user).toEqual(testUser);
  })

  test('getUsuarioActivo should return an object according name', () => {
    const name = 'vizcaino1989'
    const testUser = {
      uid: 'ABC567',
      username: name
    }
    const user = getUsuarioActivo(name)

    expect(user).toEqual(testUser);

  })

})