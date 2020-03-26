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
  console.log('カウントダウンします。');
  const inputInt = await readInput('正の整数値:');
  for (let i = +inputInt; i >= -1; i--) {
    if(i === -1){
      console.log('xの値は' + i + 'になりました');
    } else {
      console.log(i);
    }
  }
})();