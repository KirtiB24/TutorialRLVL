n = 121;
rev = 0;
//n1=n;
while(n>0)
{
 d = n%10;
 rev = rev*10+d;
 n = Math.floor(n/10);


}
console.log(rev===n)