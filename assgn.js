const n = 100;
for (let i =0 ;i<=n;i++)
{
let copy = i;
let rev = 0;
//n1=n;
while(copy>0)
{
 let d = copy%10;
 rev = rev*10+d;
 copy = Math.floor(copy/10);
}
if (rev===i)
{
console.log(i);
}
}
