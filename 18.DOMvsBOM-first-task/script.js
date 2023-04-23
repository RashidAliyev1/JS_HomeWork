
let startBtn=document.querySelector(".start")
let stopBtn=document.querySelector(".stop")
let result=document.querySelector("#result")
let resetBtn=document.querySelector(".reset")
let incrementBtn=document.querySelector(".increment")
let decrementBtn=document.querySelector(".decrement")
let input=document.querySelector(".input")
let valueBtn=document.querySelector(".value")

let  count=0;
let interval;
startBtn.addEventListener("click",function(){
   interval= setInterval(()=>{
count++;
result.innerText=count;
    },1000);
    this.setAttribute("disabled","true");
    stopBtn.removeAttribute("disabled")
}
)

stopBtn.addEventListener("click",function(){
    clearInterval(interval);
    startBtn.removeAttribute("disabled");
    this.setAttribute("disabled","true");
})
resetBtn.addEventListener("click",function(){
    result.innerText=0;
    count=0;
    clearInterval(interval);
    startBtn.removeAttribute("disabled");
    stopBtn.removeAttribute("disabled")
})

incrementBtn.addEventListener("click",function(){
    result.innerText++;
})
decrementBtn.addEventListener("click",function(){
    result.innerText--;
})

valueBtn.addEventListener("click",function(){
    // result.innerText=Number(input.value) + Number(result.innerText)
   count+= Number( input.value);
  result.innerText = count;
})


startBtn.style.color="white"
startBtn.style.backgroundColor="green"
startBtn.style.width="70px"
startBtn.style.height="26px"
startBtn.style.border="none"

result.style.color="blue"

stopBtn.style.color="white"
stopBtn.style.backgroundColor="red"
stopBtn.style.width="70px"
stopBtn.style.height="26px"
stopBtn.style.border="none"

incrementBtn.style.color="white"
incrementBtn.style.backgroundColor="rgb(0, 145, 255)"
incrementBtn.style.width="120px"
incrementBtn.style.height="26px"
incrementBtn.style.border="none"

decrementBtn.style.color="white"
decrementBtn.style.backgroundColor="rgb(0, 145, 255)"
decrementBtn.style.width="120px"
decrementBtn.style.height="26px"
decrementBtn.style.border="none"

resetBtn.style.color="black"
resetBtn.style.backgroundColor="rgb(255, 101, 0)"
resetBtn.style.width="70px"
resetBtn.style.height="26px"
resetBtn.style.border="none"

input.style.border="1px solid red"
input.style.border="1px solid red"

valueBtn.style.backgroundColor="bisque"
valueBtn.style.border="none"
valueBtn.style.width="180px"
valueBtn.style.height="23px"





