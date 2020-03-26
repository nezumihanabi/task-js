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
  const inputInt = await readInput('何個表示しますか:');
  for (let i = 0; i < +inputInt; i++) {
    if (i % 2 === 0) {
      console.log('*');
    } else {
      console.log('+');
    }
  }
})();