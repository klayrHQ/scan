const FIXED_POINT = 10 ** 8;
const LISK_MAX_DECIMAL_POINTS = 8;
const MAX_UINT64 = BigInt('18446744073709551615'); // BigInt((2 ** 64) - 1) - 1
const getDecimalPlaces = (amount: string): number => (amount.split('.')[1] || '').length;
export const convertBeddowsToLSK = (beddowsAmount?: string): string => {
  if (typeof beddowsAmount !== 'string') {
    return ""
  }
  if (getDecimalPlaces(beddowsAmount)) {
    return beddowsAmount;
  }
  const beddowsAmountBigInt = BigInt(beddowsAmount);
  if (beddowsAmountBigInt > MAX_UINT64) {
    throw new Error('Beddows amount out of range');
  }
  const int = (beddowsAmountBigInt / BigInt(FIXED_POINT)).toString();
  const floating = Number(beddowsAmountBigInt % BigInt(FIXED_POINT)) / FIXED_POINT;
  const floatingPointsSplit = floating
    .toLocaleString('en-US', {
      maximumFractionDigits: LISK_MAX_DECIMAL_POINTS,
    })
    .split('.')[1];

  return floating !== 0 ? `${int}.${floatingPointsSplit}` : int;
};
