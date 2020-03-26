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
  const inputIntA = await readInput('実数a:');
  const inputIntB = await readInput('実数b:');
  console.log('大きい方の値は' + (+inputIntA > +inputIntB ? inputIntA : inputIntB)　+'です。');
})();