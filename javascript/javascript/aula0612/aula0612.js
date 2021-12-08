function checkIfElse() {
    if(n === 1) {
        console.log("Eu sou o único");
    }
    else if(n === 2) {
        console.log("Somos pares");
    }
    else if(n === 3) {
        console.log("Somos um trio");
    }
    else {
        console.log("default");
    }
}


function checkSwitch() {
    switch(n) {
        case(1):
            console.log("unico");
            break;
        case(2):
            console.log("par");
            break;
        case(3):
            console.log("trio");
            break;
        default:
            console.log("default");
            break;
    }
}


function checkParityWithFor()
{
    for(var i = 0; i < n; i++)
    {
        if(i%2===0)
        {
            console.log(i);
        }
    }
}


function checkParityWithFor()
{
    for(var i = 0; i < n; i++)
    {
        if(i%2===0)
        {
            console.log(i);
        }
    }
}


function checkParityWithWhile()
{
    var i = 0;
    while(i < n && i%2===0)
    {
        if(i%2===0)
        {
            console.log(i);
        }
        i++;
    }
}

function checkParityWithDoWhile()
{
    var i = 0;
    do
    {
        if(i%2===0)
        {
            console.log(i);
        }
        i++;
    }while(i < n)
}


function sum(a, b)
{
    return a+b;
}

function sub(a, b)
{
    return a-b;
}

function quadratic(a, b, c)
{
    
    var root= sub(b*b, 4*a*c) ** 0.5;
    var denom = 2*a;
    console.log(sum(-b, root)/denom);
    console.log(sub(-b, root)/denom);

    return [sum(-b, root)/denom, sub(-b, root)/denom];
}

