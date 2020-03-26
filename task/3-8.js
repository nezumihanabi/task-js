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
  if (+inputInt > 0) {
    if (+inputInt % 5 === 0) {
      console.log('その値は5で割り切れます。');
    } else {
      console.log('その値は5で割り切れません。');
    }
  } else {
    console.log('正でない値が入力されました。');
  }
})();