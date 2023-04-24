describe('Pruebas en <DemoComponent />', () => {

  test('no debe fallar', () => {

    // 1 initialization
    const message1 = "Hola mundo"

    // 2 estimulos
    const message2 = message1.trim();

    // 3 behavior
    expect(message1).toBe(message2);

  })

})
