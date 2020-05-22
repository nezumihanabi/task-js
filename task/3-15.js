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
  console.log('最小値は' + (+inputIntA > +inputIntB ? +inputIntB > +inputIntC ? inputIntC : inputIntB : inputIntA)　+'です。');
})();