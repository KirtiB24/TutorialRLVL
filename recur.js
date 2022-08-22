function table(n,i)
{
    if(i>10)
    {
     return false;
    }
    else{
        console.log(`${n} *${i}=${n *i}`)
        i++;
    }
    table(n,i);
}
table(10,1)