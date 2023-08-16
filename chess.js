// CHESS 

for (let row = 0; row <=7; row++){
  let x = " "
   for (let col = 0; col <=7; col++){
    if ((row+col)% 2 == 0) {
      x = x + '# '
    }else{
      x += "   "
    }
  }
  console.log(x)
}