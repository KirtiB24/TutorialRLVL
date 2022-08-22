
let n=4; let m =5;
let mat = new Array(n)

let count=0
for(let i=0;i<n;i++){
    mat[i]=[]
	for(let j=0;j<m;j++){
		mat[i][j] = count++;
	}
}

console.log(mat)
