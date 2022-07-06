function move(arr){
    arr.sort();
}
 
let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
move(arr);
for (let i =0;i<=arr.length-1 ;i++)
    {
        console.log(arr[i], " ");
    }