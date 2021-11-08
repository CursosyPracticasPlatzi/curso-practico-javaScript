function secondLargestNumber(numbers){
  let first = numbers[0]
  let second = 0

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > first){
      second = first
      first = numbers[i]
    }

    if (numbers[i] > second && numbers[i] < first){
      second = numbers[i]
    }
  }
  return second
}

let nums = [9,8,6,4,5,3]
console.log(secondLargestNumber(nums));

//Es muy complicado este código pero estamos avanzando.