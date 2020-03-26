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
  console.log('それらの差は' + (+inputIntA > +inputIntB ? +inputIntA - +inputIntB: +inputIntB - +inputIntA)　+'です。');
})();