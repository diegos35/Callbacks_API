//Declaramos una funcion
const doSomethingAsinc = () =>{
    //retornamos una promesa
    return new Promise((resolve, reject) =>{
          /**hacemos un condicional para recibir la 
           * respuesta resuelta o no respuesta de nuestra promesa
           * */
           (true) 
            ? setTimeout(() => resolve('Do something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
     /**Declaro una constante la cual le indicamos la palabra await en la cual decimos
     ** Que estamos a la espera de la ejecucion de la funcion que le indicamos*/
    const something = await doSomethingAsinc();
    console.log(something);
    //console.log(wait);
}

console.log('Before');
doSomething();
console.log('After');


 /**Capturar Errores con try catch 
  Hacemos lo mismo que en la funcion 
  anterior pero utilizando try catch
  */

const anotherFunction = async () => {
    try {
        const something = await doSomething //pausar el siguiente  bloque codigo hasta que tenga un resultado
        console.log(something); 
    } catch (error) {
       console.log(error) 
    }
}

console.log('Before 1');
anotherFunction();
console.log('After  1');
