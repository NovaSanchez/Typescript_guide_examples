type Animal = {
  nombre: string,
  tipo: string,
  mamifero: boolean,
  vuela: boolean,
  edad: number
}

const animalnuevo: Animal = {
  nombre: 'pascal',
  tipo: 'gekko',
  mamifero: false,
  vuela: false,
  edad: 1

}

console.log(animalnuevo);
console.log(typeof animalnuevo);


class Animalote {
  nombre: string = '';
  tipo: string = '';
  mamifero: boolean = false;
  vuela: boolean = false;
  edad: number = 0;
}

const newAnimalote: Animalote = new Animalote();
console.log(typeof newAnimalote);