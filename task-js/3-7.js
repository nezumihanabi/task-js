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
  const inputIntA = await readInput('変数a:');
  const inputIntB = await readInput('変数b:');
  if (+inputIntA > +inputIntB) {
    console.log('aの方が大きいです。');
  } else if  (+inputIntA < +inputIntB) {
    console.log('bの方が大きいです。');
  } else {
    console.log('aとbは同じ値です。');
  }
})();