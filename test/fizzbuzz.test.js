import { describe, it, expect } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
//   it('Debería ser una función', () => {
//     expect(typeof fizzbuzz).toBe('function')
//   })

  it('deberia lanzar un error si el parámetro no es un número', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('deberia lanzar un mensaje error específico si el parámetro no es un número', () => {
    expect(() => fizzbuzz()).toThrow('El parámetro debe ser un número')
  })

  it('deberia lanzar un mensaje error específico si no se entrega un número ', () => {
    expect(() => fizzbuzz(NaN)).toThrow('El parámetro debe ser un número')
  })

  it('deberia devolver 1 si numero es 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('deberia devolver 2 si numero es 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('deberia devolver fizz si  el numero es multiple de 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
  })
  it('deberia devolver buzz si  el numero es multiple de 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
  })
  it('deberia devolver fizzbuzz si  el numero es multiple de 5 y 3', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
  })
})
