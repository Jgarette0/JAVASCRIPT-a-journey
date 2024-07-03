type CurrencyUnit = [string, number]; // [name, value]
type CashRegisterStatus = "OPEN" | "CLOSED" | "INSUFFICIENT_FUNDS";

function checkCashRegister(
  price: number,
  cash: number,
  cid: CurrencyUnit[]
): { status: CashRegisterStatus; change: CurrencyUnit[] } {
  const currencyValues: { [key: string]: number } = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let changeDue = cash - price;
  let totalCID = cid.reduce((acc, [_, value]) => acc + value, 0);

  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  let changeArray: CurrencyUnit[] = [];

  cid.reverse().forEach(([name, value]) => {
    let currentValue = 0;

    while (currencyValues[name] <= changeDue && value > 0) {
      changeDue -= currencyValues[name];
      value -= currencyValues[name];
      currentValue += currencyValues[name];
      changeDue = Math.round(changeDue * 100) / 100;
    }

    if (currentValue > 0) {
      changeArray.push([name, currentValue]);
    }
  });

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}

// Example usage
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
