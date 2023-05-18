export const getDotString = (keys: (string | number)[], obj: Record<string, any>) => {
  try {
    return keys.reduce((o, i) => o[i], obj);
  } catch (e) {
    return "";
  }
};

export const getFromDottedKey = (
  key: string,
  rowKey: string,
  row: Record<string, any>,
  data: Record<string, any>
) => {
  const split = key?.split(".")?.map(item => {
    // If the item can be parsed to a number, it's probably an array index
    const parsed = Number.parseInt(item, 10);
    return Number.isNaN(parsed) ? item : parsed;
  });
  return getDotString(
    split?.[0] ? split[0] === rowKey ? split.slice(1) : split : [],
    split?.[0] ? split[0] === rowKey ? row : data : {}
  );
};
