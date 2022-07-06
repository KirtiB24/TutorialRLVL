function sayhello(x) // nonreturnable function
{
    console.log("Hello",x);
    console.log("hie hw u", x);

}
sayhello("Kirti");
sayhello("Atul");

function add (a,b)
{
    console.log("Addition",a+b);
    console.log("subtraction.", a-b);
}
add(6,8);
add(56,89);
function sqr(num) // Returnable function
{
    let reslt = num *num;
    return reslt;
}
let a = sqr(7);
console.log(a);

function sqr1(num) // Returnable function
{
    //let reslt = num *num;
    return num *num;
}
let b = sqr(9);
console.log(b);


function oddnum(n)
{
    let sum = 0;
    for (i=1;i<=n;i+=2)
    {
        
        sum +=i ;
    }
    return sum;
}
console.log(oddnum(5));
console.log(oddnum(10));
console.log(oddnum(7));
