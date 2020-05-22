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
  let allowInput = true;
  let inputInt = undefined;
  while (allowInput) {
    inputInt = await readInput('3桁の正の整数値:');
    if (+inputInt >= 100 && +inputInt <= 999) {
      allowInput = false;
    }
  }
  console.log(inputInt + 'と入力しましたね。')
})();