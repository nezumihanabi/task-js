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
  const inputIntA = await readInput('整数A:');
  const inputIntB = await readInput('整数B:');
  const array = [+inputIntA, +inputIntB];
  array.sort((a, b) => a - b);
  for (let i = array[0]; i <= array[1]; i++) {
    console.log(i);
  }
})();