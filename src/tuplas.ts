let x: [number, string, boolean] = [1, 'nova', true];
console.log(x);
console.log(typeof x[0]);
console.log(typeof x[1]);
console.log(typeof x[2]);

x = [2, 'hola mundo', false];
console.log(x);

//no se puede asignar un indice esprcifico pues debe
// x[2] = true //Error -> Type 'boolean' is not assignable to type 'string'.