// let marks=[10,20,30,40,50,60];
// console.log(marks);

// // Add an element at end
// marks.push(50);
// console.log(marks);

// //fetch element
// console.log(marks[2]);

// //Delete at end value
// console.log(marks.pop());

// console.log(marks.indexOf(50));

let marks=[10,20,30,40,50,60];

submarks= marks.slice(2,6);
console.log(submarks);
let sum=0;
for(let i=0; i<submarks.length;i++){
    sum=sum+submarks[i];
}
console.log(sum);

// check wheter elemnt is present in array or not
let value=50;
if(submarks.includes(value)){
    console.log("Element is present in array");
    console.log("Element is listed at Index: "+ submarks.indexOf(value))
}else{
    console.log("Element is not listed in array");
}

//Reduce function

let totalSumOfNumbers=submarks.reduce((addNumbers,submarksAteachIndex)=> addNumbers+submarksAteachIndex,0);
console.log(totalSumOfNumbers);

//Filter
let numbers=[58,74,10,36,33,21,35,97]
console.log("before sort: "+ numbers);
console.log("After sort: "+ numbers.sort());

let evenNumbers=numbers.filter(even=> even%2==0,0);
console.log(evenNumbers);

let sumofeven = evenNumbers.reduce((sum,arrNum)=> sum + arrNum,0);
console.log(sumofeven);

//Map
let multiply=evenNumbers.map(num=>num*3);
console.log(multiply);
