export const unmutatedCopy = <
  RefType extends { [key: string]: any } = { [key: string]: any }
>(
  refObj: RefType,
  newValueObj: RefType
) => {
  Object.keys(newValueObj).forEach((key) => {
    if (newValueObj?.[key] !== undefined) {
      (refObj as any)[key] = newValueObj[key];
    }
  });
  Object.keys(refObj).forEach((key) => {
    if (newValueObj?.[key] === undefined) {
      delete (refObj as any)[key];
    }
  });
  return refObj;
};
