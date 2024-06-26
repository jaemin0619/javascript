/**
 * Async / Await
 */
const getPromise=()=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('완료');
    },seconds*1000)
});

async function runner(){
try{
    const result1=await getPromise(1);
    console.log(result1);
    const result2=await getPromise(2);
    console.log(result2);
   const result3=await getPromise(1);
   console.log(reuslt3);
}catch(e){
console.log(e);
}
}


runner();
console.log('실행 끝');
