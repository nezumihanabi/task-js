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
  const rnd = Math.ceil(Math.random() * 3);
  console.log('コンピュータが生成した手です。');
  switch (rnd) {
    case 0:
      console.log('グー');
      break;
    case 1:
      console.log('チョキ');
      break;
    case 2:
      console.log('パー');
      break;
    default:
      console.log('グー');
      break;
  }
})();