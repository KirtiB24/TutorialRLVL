
let arr = [2, 3, 4, 5, 6];
let n = arr.length;
modify(arr, n);
for (let i = 0; i < n; i++)
{console.log(arr[i] + " ");}
   

function modify(arr, n)
{ 
    if (n <= 1)
      return;
    let prev = arr[0];   //2
    arr[0] = arr[0] * arr[1]; //6
    for (let i = 1; i < n - 1; i++)
    {
        let curr = arr[i];  //3 ,4,5
        arr[i] = prev * arr[i+1]; //8,5*3, 4*6
        prev = curr; //3,4,5
    }
    arr[n-1] = prev * arr[n-1];
}