export const deepCloneObject = <T extends object>(objToClone: T) => {
  const obj: any = {};
  for (const [key, value] of Object.entries(objToClone)) {
    if (typeof value === 'object') obj[key] = deepCloneObject(value);
    else obj[key] = value;
  }
  return obj as T;
};
