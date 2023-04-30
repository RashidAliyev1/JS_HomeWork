const result=document.querySelector(".result");
const val1 = document.querySelector(".value1");
const val2 = document.querySelector(".value2");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const mul = document.querySelector(".mul");
const div = document.querySelector(".div");
const resetBtn = document.querySelector(".reset");

add.addEventListener("click",function(){
    val1.value==="" || val2.value===""
    ? alert("Empty value!")
    : result.innerText=+val1.value + +val2.value
}
)
sub.addEventListener("click", function () {
  val1.value === "" || val2.value === ""
    ? alert("Empty value!")
    : result.innerText = val1.value - val2.value;
});

mul.addEventListener("click", function () {
  val1.value === "" || val2.value === ""
    ? alert("Empty value!")
    : result.innerText = val1.value * val2.value;
});

div.addEventListener("click", function () {
  if (val1.value === "" || val2.value === "") alert("Empty value!");
  else if (val2.value === String(0)) alert("Cannot be divided by 0!");
  else result.innerText = val1.value / val2.value;
});

resetBtn.addEventListener("click", function () {
  val1.value = "";
  val2.value = "";
  result.innerText = 0;
});