const fizzbuzz = (numero) => {
  if (typeof numero !== 'number') throw new Error('El parámetro debe ser un número')
  if (Number.isNaN(numero)) throw new Error('El parámetro debe ser un número')
  const multiples = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object
    .entries(multiples)
    .forEach(([multiplier, palabra]) => {
      if (numero % multiplier === 0) output += palabra
    })

  return output === '' ? numero : output
}

export {
  fizzbuzz
}
