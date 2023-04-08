
function calcAge(age) {
    return (age*365)
}
console.log(calcAge(20))

 a="Front-end Devoloper";
for(let i=0;i<a.length;i++){
    console.log([i])
}


for(let i=1;i<10;i++){
    if(i%2==0) {
        console.log(i)
    }
}
multiply=1
for(let i=1;i<17;i++){
    if(i%2==1){
        multiply*=i;
    }
}console.log(multiply)

multiply=1
for(let i=10;i<=18;i++){
    
        multiply*=i;
    }
console.log(multiply)


sum=0
for(let i=17;i<=30;i++){
    if(i==19 || i==20){
        continue;
    }
        sum+=i;
    }
    console.log(sum)


    // for(let i=1;i<=30;i++){
    //     if(i%2==0) {
    //         console.log(` ${i} is even number`);
    //     }
    //     else{i%2==1} {
    //         console.log(` ${i} is odd number`)
    //     }    
    //     }

    sum=0
for(let i=1;i<=30;i++){
    if(i%2==0)
        sum+=i;
    }
    console.log(sum)
    sum=0
for(let i=1;i<=30;i++){
    if(i%2==1)
        sum+=i;
    }
    console.log(sum)


    











