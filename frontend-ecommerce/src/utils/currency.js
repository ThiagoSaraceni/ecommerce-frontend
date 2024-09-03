export const formatNumberWithTwoDecimals = (num) => {
  let numStr = num?.toString();
  if (numStr?.includes(".")) {
    let [integerPart, decimalPart] = numStr.split(".");
    if (decimalPart.length < 2) {
      decimalPart = decimalPart.padEnd(2, "0");
    }
    return `${integerPart}.${decimalPart}`;
  } else {
    return `${numStr}.00`;
  }
};
