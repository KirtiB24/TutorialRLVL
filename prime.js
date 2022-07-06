
function isPrime(N){
    if(N===1) return true;
    for (let i=2;i<N;i++){
        if(N%i ===0)return false;
    }
    return true;
}



function pairPrime(N){
    for(let a =2;a<N;a++){
        let b = N-a;
        if(isPrime(a)&&isPrime(b)){
            return[a,b]
        }
    }
}
console.log(pairPrime(15));