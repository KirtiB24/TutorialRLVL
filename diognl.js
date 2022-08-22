const matrix =[
    [5,0,0],
    [0,4,0],
    [0,0,9]
]
const isdiogMatrix = (matrix = [])=>{
    if(matrix.length === 0 || typeof matrix !== Object) return false;
    for(let i =0;i<matrix.length;i++){
        for(let j = 0;j<matrix[i].length;j++)
     if(i!==j)
     {
        if(matrix[i][j] != 0){
            return false;
        }
     }
     return true;
    }

};
let val = isdiogMatrix()
console.log(val);