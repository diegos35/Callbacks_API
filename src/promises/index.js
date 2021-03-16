//la promesa se le pasan dos parametros un  resolve, reject
//Promesa algo va a pasar
const sometingWillHapped = () => {
    return new Promise((resolve, reject)=> {//Promesa
        if(true){
            resolve('hey!');
        }else{
            reject('whoooops');
        }
    }); 
}



sometingWillHapped()
.then(response => console.log(response)) 
.catch(err => console.error(err));


const sometingWillHapped2 = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(()=>{
                resolve(true);
            }, 2000)
        }else{
            const error = new Error('Whooop!');
            reject(error);
        }
    })

}

sometingWillHapped2()
    .then(response => console.log(response))
    .catch(err => console.log(err));


    /**Recibe como parámetro 2 promesas*/
Promise.all([sometingWillHapped(), sometingWillHapped2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })