// We will sum all numbers passed as command line arguments

let sum = 0  // variable to store the total

// process.argv is an array:
// [node path, script path, arg1, arg2, ...]
// so we start from index 2
for (let i = 2; i < process.argv.length; i++) {
  // convert each argument from string to number and add to sum
  sum += Number(process.argv[i])
}

// print the final result
console.log(sum)