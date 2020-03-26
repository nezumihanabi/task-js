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
  const array = [+inputIntA, +inputIntB];
  array.sort((a, b) => b - a);
  console.log('a >= b となるようにソートしました。');
  console.log('整数aは' + array[0] + 'です。');
  console.log('整数bは' + array[1] + 'です。');
})();