import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Tests in 08-imp-exp', () => {

  test('getHeroeById should return a hero by id', () => {
    const id = 1
    const hero = getHeroeById(id)

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroeById should return undefined', () => {
    const id = 12121
    const hero = getHeroeById(id)

    expect(hero).toBeFalsy()
  })

  test('getHeroesByOwner should return heroes according owner', () => {
    const dcHeroes = getHeroesByOwner('DC')
    const marvelHeroes = getHeroesByOwner('Marvel')

    expect(dcHeroes.length).toEqual(3)
    expect(marvelHeroes.length).toEqual(2)
  })

})