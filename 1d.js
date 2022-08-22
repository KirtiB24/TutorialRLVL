let oned=[56,989,"maya"];
oned.forEach((element)=>{
    console.log(element);
}); //callback function

let mat = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9,10,11,12],
    [13,14,15,16,17,18]
];
/*
k-start row
m-end row
l-start col
n-end col
*/
function printMatrixInSprial(mat,m, n) {
    
    let k = 0, l = 0, i = 0;


    while(k < m && l < n) {
        for(i = l; i < n; i++) {
            console.log(mat[k][i] + ' '); //123456
        }
        k++;

        for(i = k; i < m; i++) {
            console.log(mat[i][n-1] + ' '); // 12 18
        }
        n--;

        if(k<m) {
            for(i = n-1; i >= l; i--) {
                console.log(mat[m-1][i] + ' '); // 17
            }
            m--;
        }

        if(l< n) {
            for(i=m-1; i>=k; i--) {
                console.log(mat[i][l] + ' ');
            }
            l++;
        }
    }

}

