export const makeOptionsFromEnum = (enumObj: { [key: string]: string }) =>
  Object.keys(enumObj).map((key) => ({
    value: enumObj[key as keyof typeof enumObj],
    label: enumObj[key as keyof typeof enumObj],
  }));
