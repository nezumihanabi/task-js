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
  if (+inputInt >= 0 || +inputInt <= 100) {
    if (+inputInt < 60) {
      console.log('不可');
    } else if (+inputInt < 70) {
      console.log('可');
    } else if (+inputInt < 80) {
      console.log('良');
    } else {
      console.log('優');
    }
  } else {
    console.log('不正な点数です。');
  }
})();