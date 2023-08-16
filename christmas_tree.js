// CHRISTMAS TREE

for (let a = 0; a <= 6; a++) {
  let x = " "
  for (let b = 0; b <= 10; b++) {
    if ((10 - a) / 2 <= b && b < (10 + a) / 2 ) {
      x += "  0"
    } else {
      x += "  "
    }
  }
  console.log(x);
}

console.log("\n");