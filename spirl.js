let mat = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9,10,11,12],
    [13,14,15,16,17,18]
];

/*
k - starting row index,
endr- ending row index,
l - starting column index,
endc - ending column index
i - iterator


*/

function printMatrixInSprial(mat,endr, endc) {
    
    let k = 0, l = 0, i = 0;

    while(k < endr && l < endc) {
        for(i = l; i < endc; i++) {
            console.log(mat[k][i] + ' '); //123456
        }
        k++;

        for(i = k; i < endr; i++) {
            console.log(mat[i][endc-1] + ' ');
        }
        n--;

        if(k<m) {
            for(i = n-1; i >= l; i--) {
                console.log(mat[m-1][i] + ' ');
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

let res =printMatrixInSprial(mat,6, 3)
console.log(res);