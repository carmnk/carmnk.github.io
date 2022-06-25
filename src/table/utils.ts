export const isNumericString = (value: string) => {
  const nonNumerics = Array.from(value).filter(
    (char) =>
      ![
        ...Array(10)
          .fill(0)
          .map((x, idx) => idx.toString()),
        '',
        '.',
      ].includes(char)
  )
  return nonNumerics.length > 0 ? false : true
}
