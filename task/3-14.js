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
  console.log('それらの差は' + ((+inputIntA > +inputIntB ? +inputIntA - +inputIntB: +inputIntB - +inputIntA) >= 11 ? '11以上' : '10以下')　+'です。');
})();