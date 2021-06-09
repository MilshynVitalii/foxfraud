export function declention(n, form) {
  const n100 = n % 100;
  const n10 = n % 10;

  if (n100 >= 11 && n100 <= 14) return form[0];
  if (n10 >= 2 && n10 <= 4) return form[1];
  if (n10 === 1) return form[2];

  return form[0];
}
