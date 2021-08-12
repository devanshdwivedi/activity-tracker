export const generateId = (add?: number) => {
  const addValue = add ? add : 0;
  return (new Date().valueOf() + addValue).toString();
};
