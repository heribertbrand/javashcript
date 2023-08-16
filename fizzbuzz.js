// FIZZBUZZ

for (let p = 1  ; p <= 100; p++) {
  if (p % 3 == 0 && p % 5 == 0){
    console.log("fizzbuzz")
  } else if (p % 3 == 0){
    console.log("fizz")
  } else if (p % 5 == 0) {
    console.log("buzz")
  } else if (p % 1 == 0){
    console.log(p)
  }
}