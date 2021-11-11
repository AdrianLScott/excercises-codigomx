//Took me 20minutes

const findNonDuplicate = (numbers) => {
  const numbersCount = {};
  numbers.forEach((number)=>{
    if(number in numbersCount)
       numbersCount[number]++;
    else 
       numbersCount[number] = 1;
  })
  
  for (let [key, value] of Object.entries(numbersCount)) {
    if(value === 1)
      return key;
  }
}

console.log(findNonDuplicate([6,5,6,4,5,7,7]))
console.log(findNonDuplicate([5,5,1,2,1,3,6,6]))