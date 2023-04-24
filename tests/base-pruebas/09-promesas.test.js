import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Tests in 09-promesas', () => {

  test('getHeroesByIdAsync should return a hero', (done) => {
    const id = 1
    getHeroeByIdAsync(id).then(hero => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
      })

      done()
    })
  })

  test('getHeroesByIdAsync should return an error if hero does not exist', (done) => {
    const id = 1111
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBeFalsey();
      })
      .catch(error => {
        expect(error).toBe(`No se pudo encontrar el héroe con el ID ${id}`)

        done()
    })
  })

})