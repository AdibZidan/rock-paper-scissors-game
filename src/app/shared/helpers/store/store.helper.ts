export const DELAY_TIME: number = 1_500;

export const getExistingPropertyFromLocalStorage = (property: string): string => {
  const key: null | string = localStorage.getItem(property);

  if (key) {
    return key;
  }

  return '';
};
