const poopArray = [1,3,5,8,9]

function multiplyThem(aa) {
  let newNumber = 1
  for (i=0;i<aa.length;i++) {
    newNumber *= aa[i]
  }
  console.log(newNumber)
  return newNumber
}

multiplyThem(poopArray)
