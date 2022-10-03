export const canReconfigure = (from, to) => {
  // ? esta condición ya está siendo comprobada por la siguiente.
  // if (from === undefined) throw new Error('from debe estar definido'
  if (typeof from !== 'string') throw new Error('from debe ser un string')
  if (typeof to !== 'string') throw new Error('to debe ser un string')
  const mismaLognitud = from.length === to.length
  if (!mismaLognitud) return false
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false
  const transformaciones = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetra = from[i]
    const toLetra = to[i]
    const letraGuardada = transformaciones[fromLetra]

    if (letraGuardada && letraGuardada !== toLetra) return false
    transformaciones[fromLetra] = toLetra
  }
  return true
}
