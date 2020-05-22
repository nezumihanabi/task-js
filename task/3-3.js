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
  const inputIntA = await readInput('変数A:');
  const inputIntB = await readInput('変数B:');
  if (+inputIntA % +inputIntB === 0) {
    console.log('BはAの約数です');
  } else {
    console.log('BはAの約数ではありません');
  }
})();