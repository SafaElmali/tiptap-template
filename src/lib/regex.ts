export const checkHexColor = (colorInputValue: string) => {
  return /^#([0-9A-F]{3}){1,2}$/i.test(colorInputValue);
};
