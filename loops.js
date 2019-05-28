function forLoop(localArray) {
  for (let i = 0; i < 25; i++) {
     if (i === 1) {
        localArray.push('I am 1 strange loop.')
      } else {
          localArray.push("I am "+`${i}`+" strange loops.")
      }
  }
  return localArray
}

function whileLoop (number) {
  while (number > 0){
    console.log(--number)
  }
  return 'done'
}

/*
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop (integer) {
  i = 0;
  do {
    console.log('I run once regardless.')
  } while (incrementVariable() < integer)
  }
}*/
