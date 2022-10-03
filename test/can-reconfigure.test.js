
import { describe, it, expect } from 'vitest'
import { canReconfigure } from '../src/canReconfigure'

describe('canReconfigure', () => {
  // it('canReconfigure debería ser una función', () => {
  //   expect(canReconfigure).toBeTypeOf('function')
  // })
  it('Si el primer parametro está vacio, debería lanzar un error', () => {
    expect(() => canReconfigure()).toThrow()
  })
  it('Si el primer parametro no es una string, debería lanzar un error', () => {
    expect(() => canReconfigure(2)).toThrow()
  })
  it('Si el segundo parametro no es una string, debería lanzar un error', () => {
    expect(() => canReconfigure('a')).toThrow()
  })
  it('deberia retornar un boleano', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })
  it('deberia retornar falso si los strings (argumentos) si tienen una logitud diferente', () => {
    expect(canReconfigure('abc', 'de')).toBe(false)
  })
  it('deberia retornar falso si los strings (argumentos) si tienen una logitud diferente y el mismo número de letras unicas', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })
  it('deberia retornar falso si los strings proveidos no contienen el mismo número de letras unicas', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false)
  })
  it('deberia retornar falso si los strings tienen un diferente orden de transformación', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
