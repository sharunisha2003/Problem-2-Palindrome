//1.Factorial of a given number
function Factorial(n){
    if(n<=1){
        return 1;
    }
    return n*Factorial(n-1);
}
console.log(Factorial(5));
//2.Find maximum in an array
function findMax(arr){
    return Math.max(...arr);
}
console.log(findMax([1,2,3,20,4,5]));
//3.remove duplicates from an array
function removeDuplicates(arr){
    return[...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3,4,3,5]));
//4.Array shift()
const fruits=["Banana","Orange","Apple","Mango"];
document.getElementById("demo1").innerHTML=fruits;
fruits.shift();
document.getElementById("demo2").innerHTML=fruits;
//5.Array unshift()
const fruit=["Banana","Orange","Apple","Mango"];
document.getElementById("demo3").innerHTML=fruit;
fruit.unshift("Lemon");
document.getElementById("demo4").innerHTML=fruit;

console.log(5=="5");
console.log(null==undefined);
console.log(0==false);
console.log(''==0);


console.log(5==="5");
console.log(null===undefined);
console.log(0===false);
console.log(''===0);

let number=10;
if(number>5){
    console.log("The number is greater than 5");
}

let num=10;
if(num<=5){
    console.log("The number is greater than 5");
}else{
    console.log("The number is  5 or less");
}

let n=15;
if(n>10){
    console.log("The number is greater than 5");
}else if(n>5){
    console.log("The number is  greater than 5 but 10 or less");
}
else{
    console.log("The number is 5 or less");
}
let ch=2;
switch(ch){
    case 1:
        console.log("Number 1");
        break;
    case 2:
        console.log("Number 2");
        break;
    case 3:
        console.log("Number 3");
        break;
    case 4:
        console.log("Number 4");
        break;
}

let fruit3="apple";
switch(fruit3){
    case "banana":
        console.log("Bnanas are yellow");
        break;
    case "apple":
        console.log("Apples are red or green");
        break;
    case "orange":
        console.log("Oranges are orange");
        break;
    // default:
    //     console.log("Unknown fruit");
    //     break;
}


function findLargest(n1,n2,n3){
    if(n1>n2&&n1>n3)
    {
        console.log(n1);
    }
    else if(n2>n1&&n2>n3)
    {
        console.log(n2);
    }
    else(n3>n2&&n3>n1)
    {
        console.log(n3);
    }
}
findLargest(5,8,3);

function checkEvenOdd(number){
    if(number%2===0){
        console.log(number+"is even.");
    }
    else{
        console.log(number +"is odd.");
    }
}
checkEvenOdd(10);

function person(age){
    if(age>0 && age<=12){
        console.log("Child");
    }
    else if(age>13 && age<=19){
        console.log("Teenage");
    }
    else if(age>20 && age<=59){
        console.log("Adult");
    }
    else{
        console.log("Senior");
    }
}
person(50);


let power=2**3;
console.log(power);
