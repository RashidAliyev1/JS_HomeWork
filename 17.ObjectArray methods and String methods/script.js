// 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.//////////////

let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"] //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"CJMPRR"
let firstLetters=""
function secretName(anyArr) {
    firstLetters=anyArr.map((el,i)=> el[0]);
    return firstLetters.sort().join("")
 }
 console.log(secretName(names1));
 console.log(secretName(names2));
 console.log(secretName(names3));


// 2.Manipulate array///////////////////////////////////////////////////////

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },
]
users.forEach((elem)=>elem.surname[0]==="R" && elem.uni==='UNEC' ? console.log(elem):elem)

// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
users.forEach((element)=>element.age==='22' && element.name[0]==='A' ? console.log(element):null)
// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
const newArr2=users.map(el=> el.gender==='male' ? `Mr ${el.name}` : `Ms. ${el.name}`)
console.log(newArr2);
// 2.4.Sort users by age (ascending).
console.log(users.sort((a,b)=> a.age-b.age));

// 3.Shuffle array////////////////////////////////////////////////////////////////////
const letters = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5, 6, 7]
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.6);
    console.log(arr);
  }
shuffle(letters)  
shuffle(numbers)  



// 4.Divide 2 the price of arr4.
const arr4 = [
    {
        product: 'Lenova',
        price: 1900,
    },
    {
        product: 'HP',
        price: 1300,
    },
    {
        product: 'Acer',
        price: 1600,
    },
]
const priceArr= arr4.map((el)=>el.price/2)
console.log(priceArr)


// 5.Create a function called 'reverseNum()' which is to bind number with its reverse.

let num1 = 246 //246642
let num2 = 102 //102201
let num3 = 152 //152251

function reverseNum(arr){
    let num=arr.toString()
    let reverse=+(num.split('').reverse())
    return `${num}${reverse}`
   
  

}
console.log(reverseNum(num1));
console.log(reverseNum(num2));
console.log(reverseNum(num3));



/////////////////////////////////////////////////////////////////////////////////


