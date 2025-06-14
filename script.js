const makeChange = (c) => {
  // Convert string to number
  c = Number(c);

  const change = {};

  // Quarters (25 cents)
  change.q = Math.floor(c / 25);
  c %= 25;

  // Dimes (10 cents)
  change.d = Math.floor(c / 10);
  c %= 10;

  // Nickels (5 cents)
  change.n = Math.floor(c / 5);
  c %= 5;

  // Pennies (1 cent)
  change.p = c;

  return change;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
