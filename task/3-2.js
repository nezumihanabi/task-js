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
  const inputInt = await readInput('整数値:');
  if (+inputInt < 0) {
    console.log('その絶対値は' + (+inputInt * -1) + 'です');
  } else {
    console.log('その絶対値は' + +inputInt + 'です');
  }
})();