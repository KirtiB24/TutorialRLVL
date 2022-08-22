function findtriplet(A,size,sum){
    let l,r;
    A.sort=((a,b)=>a-b);
    for (let i=0;i < size -2;i++){
    l = i+1;
    r = size - 1;
    while(l < r){
        if(A[l]+A[r]+A[i]==sum){
            console.log(`triplet : ${A[i]},${A[r]},${A[l]}`);
            return true;
        }

        else if(A[l]+A[r]+A[i]<sum) l++;
        else r--;
    }  
}
return false;
}

let A = [ 3,6,5,2,10 ];
let sum = 11;
let size = A.length;

findtriplet(A,size,sum);