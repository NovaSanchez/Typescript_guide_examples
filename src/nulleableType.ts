//strictNullChecks in tsconfig for no pass null to funcs
function toNumber ( numero: string | null | undefined) {
  if(!numero) {
    return 0
  }
  return parseInt(numero);
}

console.log(toNumber('2'));
console.log(toNumber(null));
console.log(toNumber(undefined));