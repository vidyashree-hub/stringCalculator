//here using regex remove all non numeric characters including delimeter and whitespaces
const inputData = params.replace(/[^0-9.-]+/g, ' ');
//filter out empty string and convert it to an array
const numArray = inputData.split(' ').filter(num=>num!='');
//convwrt to number and calculate the sum of numbers
const totalSum = numArray
.map(num => parseFloat(num))//convert to number
.reduce((sum,num)=>sum+num,0)//calculating sum

return totalSum;
}

const inputValue = "//;\n1;2\n3,4;5";
const result = add(inputValue)