a=1
b=8
c=3;
res = b*b - 4*a*c
if(res==0.0)
{
    r = -b/2 *a;
    console.log(r);
}
else if (res < 0)
{
    console.log("no roots");
}
else
{
    r1= (-b + res)/2 *a ;
    r2 = (-b - res)/2 *a ;
}