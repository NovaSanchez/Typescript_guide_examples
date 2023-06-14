type animal = {
  name: string;
  edad: number;
  mamifero: boolean
}

type mamifero = {
  vuela: boolean;
  n_patas: number;
  name: string;
}

const bichoRaro1: animal & mamifero = {
  edad: 3,
  mamifero: true,
  name: 'pato loco',
  vuela: true,
  n_patas: 4,
}

console.log(typeof bichoRaro1);
console.log(bichoRaro1);
// el operador  &  and   simple te permite usar multiples
//tipos de datos en un misma variable pero tienen que contener si o si las propiedades
// y metodos de ambos tipos