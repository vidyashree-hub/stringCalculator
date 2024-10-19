
/** @params
 * params : function will take input as params
 * inputData : regex remove all non numeric characters including delimeter
 * negativeNumbers : remove negative values
 * largeNumbers : filter out values larger than 1000
 * totalSum : it will sum the integer
 */
export function add(params) {
   const inputData = params.replace(/[^0-9.-]+/g, " ");

  const numArray = inputData.split(" ").filter((num) => num != "");
  
  const numbers = numArray.map((num) => parseFloat(num)); //convert to number
  
  const negativeNumbers = numbers.filter((num) => num < 0);
  
  const largeNumbers = numbers.filter((num) => num >= 1000);
  
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  if (largeNumbers.length > 0) {
    throw new Error(
      `Values starting with 1000 series not allowed: ${largeNumbers.join(", ")}`
    );
  }
  const totalSum = numbers.reduce((sum, num) => sum + num, 0);
  return totalSum;
}