export const formatter = (amount: number, currency?: string) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency ?? 'USD',
  });
  return formatter.format(amount);
  // Output: $1,000.00
};

export const numberFormatter = (num: number | string) => {
  return new Intl.NumberFormat('en-Us').format(+num);
};

export const capitalize = (text: string | undefined) => {
  if (text === null || typeof text !== 'string') return;

  const words = text.includes('_') ? text.split('_') : text.split(' ');

  const output = words.map(word => {
    const capitalizedWord =
      word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    return capitalizedWord;
  });
  return output.join(' ');
};
