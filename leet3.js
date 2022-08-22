let m ;
let n ;
let i = m-1;
let j = n-1;
let k = m+n-1;
function sort(num1,num2,m,n)
{
    let m ;
    let n ;
    let i = m-1;
    let j = n-1;
    let k = m+n-1;
while (i>=0 && j>=0)
{
   if(num1[i]>num2[j])
   {
    num1[k--]=nums[i--];
   }
   else
   {
    num1[k--]=num2[j--]
   }
}
while(i>=0)
{
    num1[k--]=nums[i--];  
}
while(j>=0)
{
    num1[k--]=num2[j--];
}

}
num1 = [7,9,6,0,0,0];
num2=[3,8,9];
m=3;
n=3;
console.log(sort());
