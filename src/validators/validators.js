export const required = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthConstructor = (max) => (value) => {
  if (value && value.length < max) return undefined;
  return `Max length is ${max} symbols`;
};
