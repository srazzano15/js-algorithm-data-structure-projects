function palindrome(str) {
  // format value to be usable
  // define var via RegEx replace
  const newStr = str.replace(/[^A-Za-z0-9]/g, '')
  // convert var to lowercase
  const lowercaseStr = newStr.toLowerCase()
  // convert string into array
  const strArray = lowercaseStr.split('')
  // define var as the first index to check
  let x = 0
  // define 2nd var = to array length
  let y = parseInt(strArray.length) - 1
  // define var to determine how many times the loop will run
  const $l = parseInt(strArray.length / 2) 
  // run a loop
  for (let i = 0; i < $l; i++) {
    // if var1 is not equal to var2 return false
    if (strArray[x] === strArray[y]) {
      x++
      y--
    } else {
      return false
    }
  }
  return true;
}
