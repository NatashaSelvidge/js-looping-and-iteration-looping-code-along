// Code your solutions in this file

function writeCards(namesArr, eventName) {
  let newArr = []
  for (let i = 0; i < namesArr.length; i++) {
    newArr.push(`Thank you, ${namesArr[i]}, for the wonderful ${eventName} gift!`);
  }  
  return newArr;
}


function countDown(num) {
  while (num >= 0) {
      console.log(num--)
  }
  
}
