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
  console.log('正の整数値の桁数を求めます。')
  const inputInt = await readInput('正の整数値:');
  console.log('その数は' + String(inputInt).length + '桁です。')
})();