function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let number = 15;
let i = false;
let j = 0;

while (i === false) {
  let randomInt = getRandomInt(1, 50);
  console.log(randomInt, `попытка: ${j++}`);
  if (randomInt === number) {
    break;
  }
}
