//la promesa se le pasan dos parametros un  resolve, reject
//Promesa algo va a pasar
const sometingwillHappe = () => {
    return new Promise((resolve, reject)=> {//Promesa
        if(true){
            resolve('hey!');
        }else{
            reject('whoooops');
        }
    }); 
}



sometingwillHappe()
.then(response => console.log(response)) 
.catch(err => console.error(err));


const sometingwillHappe2 = () => {
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

sometingwillHappe2()
    .then(response => console.log(response))
    .catch(err => console.log(err));


    /**Recibe como parámetro 2 promesas*/
Promise.all([sometingwillHappe(), sometingwillHappe2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })