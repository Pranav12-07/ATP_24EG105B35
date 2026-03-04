//4. Find the smallest element in marks array
let a=[10,20,9,12]
let min=a[0]
for(let i = 0; i < a.length ; i++)
    if(a[i]<min) 
        min=a[i]
    console.log(min)