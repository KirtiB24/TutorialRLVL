let a =[125,76,8,89];
let minval = a[0];
for (let i=1; i<=a.length -1 ; i++)
{
    if(a[i]<=minval)
    {
        minval = a[i];
    }
}
console.log(minval);


let maxval= a[0];
for (let i=1; i<=a.length -1 ; i++)
{
    if(a[i]>=maxval)
    {
        maxval = a[i];
    }
}
console.log(maxval);










