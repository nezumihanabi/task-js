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
  const inputInt = await readInput('正の整数値：:');
  let result = +inputInt;
  for (let i = 1; i < +inputInt; i++) {
    result = i * result;
  }
  console.log('1から' + inputInt + 'までの積は' + result + 'です。');
})();