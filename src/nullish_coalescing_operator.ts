const difc: number | null = null;

const user2 = {
  username: "username123",
  // dificulty: difc || 1, 
  dificulty: difc ?? 1,
}

// el operador || evalua si es falsey y asigna un valor en base a ello
// falsey puede ser = " ", 0, undefined, null
// pero nos intereza 0 o '',
// el nullinsh coaliescing operator usa el ?? se usa cuando
// el valor de un string vacio o de Zero ( 0 ) es valido