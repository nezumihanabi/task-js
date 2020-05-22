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

function median(arr, fn) {
  const half = (arr.length / 2) | 0;
  const temp = arr.sort(fn);

  if (temp.length % 2) {
    return temp[half];
  }
  return (temp[half - 1] + temp[half]) / 2;
}

(async function main() {
  const inputIntA = await readInput('整数a:');
  const inputIntB = await readInput('整数b:');
  const inputIntC = await readInput('整数c:');
  console.log('中央値は' + median([+inputIntA, +inputIntB, +inputIntC]) + 'です。');
})();