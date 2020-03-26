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
  const inputInt = await readInput('整数:');
  if (+inputInt > 0) {
    console.log('その値は正です');
  } else if (+inputInt < 0) {
    console.log('その値は負です');
  } else {
    console.log('その値は0です');
  }
})();