//5. Write a function that receives 3 number args and  return the big number
function big( a, b, c){
    if(a>b && a>c)
       return a
    else if(b>c)
        return b
    else 
    return c
    
}


console.log(big(10,20,30))