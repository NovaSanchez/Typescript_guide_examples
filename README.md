Typescript Guia By Nova Sanchez


hola y bienvenido a mi guia de typescript, podras encontrar algundas ayudas interezantes y tambien el codigo del repo te puede ayudar a depejar algunas dudas 
 sin mas empecemos:

## if

// el comando if evalua un MediaElementAudioSourceNode, objeto o variable, y dirige el flujo

// dependiendo de ello, tambien puede ejecutar bloques de codigo en caso de que se cumpla

// o en caso contrario puede ejecutar otros bloque

// se util;iza los evaluadores

// == para igual

// === exactamente igual con el mismo tipo de variable

// != diferente de

// > , < mayor que y menor que

// >=; <= mayor/menor o igual que

// || or para concatenar o hacer multiple evaluaciones, se ejecutara el codigo si tan solo una cohincide

// && and donde se evaluan multiples condiciones y todas deben cohincidir


    if( 0  >  1 ) { // evaluamos que 0 sea mayor que 1
    console.log(' esto nunca salda en la consola');
    }

    const  x2 = 3;
    if (x2 == 3) {
    console.log(' x2 es igual a 3');
    }

    if( 0  >  1 ) {
    console.log(' esto nunca salda en la consola');
    } else {
    console.log(' esto siempre salda en la consola');
    }
    
    if (x2 == 3) {
    console.log(' x2 es igual a 3');
    } else {
    console.log('x2 es diferente de 3' )
    }

