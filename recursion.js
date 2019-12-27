function recursion(a,b)
{
    if(a==b)
    {
        return a;
    }
    if(a%b==0)
    {
        return b
    }

    if (b % a == 0) {
        return a
    }
    if(a>b)
    {

        
        return recursion(a%b,b)
    }
    if(b>a)
    {
        return recursion(a,b%a)
    }
}
console.log(recursion(5,4));
