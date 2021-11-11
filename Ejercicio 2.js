//Input: list of integers representing scores and a single integer for the highest possible score
//Output: A sorted list of integers in descending order
//Example: scoreSettler([ 1, 2, 3, 999999], 1000000) => [999999, 3, 2, 1]
//In your submission, please use as a test of your function the maximum value of 1218000, with a list of scores [874300, 879200, 1172100, 1141800, 933900, 1177200, 1190200, 1110100, 1158400, 985600, 1047200, 1049100, 1138600, 1170500, 1064500, 1190000, 1050200, 1090400, 1062800, 1061700, 1218000, 1068000, 1127700, 1144800, 1195100]

//Took me 25 minutes

const MAX_VALUE = 1218000;
const scoreSettler = (numbers) => {
  for(let x = 0; x < numbers.length; x++) {
    if(numbers[x] > MAX_VALUE)
       return "Max value exceeded";
  }
  
  const numbersCopy = [...numbers];
  let aux;
  const maxLength = numbersCopy.length - 1
  for (let x = 0; x <= maxLength; x++) {
    for(let y = 0; y <= maxLength - 1 - x; y++) {
       if(numbersCopy[y] < numbersCopy[y + 1]) {
         const aux = numbersCopy[y];
         numbersCopy[y] = numbersCopy[y+1];
         numbersCopy[y+1] = aux;
       }
    }
  }
  return numbersCopy;
}

const numbers = [874300, 879200, 1172100, 1141800, 933900, 1177200, 1190200, 1110100, 1158400, 985600, 1047200, 1049100, 1138600, 1170500, 1064500, 1190000, 1050200, 1090400, 1062800, 1061700, 1218000, 1068000, 1127700, 1144800, 1195100];

console.log(scoreSettler(numbers))
