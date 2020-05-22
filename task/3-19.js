function readInput(question) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    readline.question(question, (answer) => {
      resolve(answer);
      readline.close();
    });
  });
}

(async function main() {
  const inputIntA = await readInput('整数a:');
  const inputIntB = await readInput('整数b:');
  const inputIntC = await readInput('整数c:');

  const array = [+inputIntA, +inputIntB, +inputIntC];
  array.sort((a, b) => a - b);
  console.log('a <= b <= c となるようにソートしました。');
  console.log('整数aは' + array[0] + 'です。');
  console.log('整数bは' + array[1] + 'です。');
  console.log('整数cは' + array[2] + 'です。');
})();