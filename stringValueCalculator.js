function add(params){
//here using regex remove all non numeric characters including delimeter and whitespaces
const inputData = params.replace(/[^0-9.-]+/g, ' ');
//filter out empty string and convert it to an array
const numArray = inputData.split(' ').filter(num=>num!='');
//convwrt to number and calculate the sum of numbers
const numbers = numArray.map(num => parseFloat(num)) //convert to number
//check for negative values
const negativeNumbers = numbers.filter(num => num<0)

if(negativeNumbers.length>0){
    throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`)
}
const totalSum = numbers.reduce((sum,num)=>sum+num,0)
return totalSum;
}

const inputValue = "//;\n1;2\n3,4;5\n-1;-2;-3";
try{
const result = add(inputValue)
}catch(error){
console.error(error.message);
}

