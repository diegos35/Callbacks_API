function sum(num1, num2){
    return num1+num2;
}


function calcular(num1, num2, callback){ //aqui tengo que pasarle como parámetro la function
    return callback(num1, num2) //esto lo envía a la funcion sum 
}


console.log(calcular(6,2,sum));


function date(callback){
    console.log(new Date, 1);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000) //le pasamos tiempo en milisegundos
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);