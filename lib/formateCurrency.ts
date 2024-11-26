export function formateCurrency(
  amount: number,
  currencyCode: string = "GBP"
): string {
  try {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: currencyCode.toUpperCase(),
    }).format(amount);
  } catch (error) {
    console.log(error);
    return `${currencyCode.toLocaleLowerCase()} ${amount.toFixed(2)}`;
  }
}
