const arr1 = [1, 2, 3];
const arr12 = [80, 5, 100];
const arr13 = [-500, 0, 50];

const getFirstValue = function (AnyArr) {
  return AnyArr[0];
};
console.log(getFirstValue(arr1));
console.log(getFirstValue(arr12));
console.log(getFirstValue(arr13));


const arr21 = [1, 2, 3];
const arr22 = ["cat", "dog", "duck"];
const arr23 = [true, false, true];
let getLastItem = function (AnyArr2) {
  return AnyArr2[2];
};
console.log(getLastItem(arr21));
console.log(getLastItem(arr22));
console.log(getLastItem(arr23));


function addition(a, b) {
    return a + b;
  }
  console.log(addition(3, 2));
  console.log(addition(-3, -6));
  console.log(addition(7, 3));


  const lessThan100 = (num1, num2) => {
    if (num1 + num2 < 100) {
      return true;
    } else {
      return false;
    }
  };
  console.log(lessThan100(22, 15));
  console.log(lessThan100(83, 34));
  console.log(lessThan100(3, 77));


  function volumeOfBox(width, length, height) {
    return width * length * height;
  }
  console.log(volumeOfBox(2, 5, 1));
  console.log(volumeOfBox(4, 2, 2));
  console.log(volumeOfBox(2, 3, 5));


  function points(twoPointers, threePointers) {
    return twoPointers * 2 + threePointers * 3;
  }
  console.log(points(1, 1));
  console.log(points(7,5));
  console.log(points(38, 8));


  const arr5 = [
    {
      name: "Rashid",
      surname: "Aliyev",
      city: "Ganja",
    },
    {
      name: "my name",
      surname: "my surname",
      city: "my city",
    },
    {
      name: "my name",
      surname: "my surname",
      city: "my city",
    },
  ];
  let text=""; 
  const fillInfo = function (arr){
      for ( let value of arr){
    text+=value
      }
      return arr
  };
  console.log(fillInfo(arr5));
  

  