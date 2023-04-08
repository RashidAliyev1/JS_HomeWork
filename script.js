
function calcAge(age) {
    return (age*365)
}
console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20))

let a="Front-end Devoloper";
let b=""
for(let i=0;i<a.length;i++){
    b+=a[i];
    console.log(b)
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

let sum1=0
let r=1
while (r<= 30) {
  if (r%2==0) {
    console.log(r);
    sum1+=r
  }
  r++;
}
console.log(sum1);

let sum2=0
let f=1
while (f<= 30) {
  if (f%2==1) {
    console.log(f);
    sum2+=f
  }
  f++;
}
console.log(sum2);
console.log(sum1-sum2);



for (let s= 1; s <=16; s++) {
    if (s%2==0) {
        console.log(`${s} ${s**2}`);
    }
    
}














