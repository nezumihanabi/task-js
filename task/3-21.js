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
  const inputInt = await readInput('何月ですか：');

  switch (+inputInt) {
    case 1:
    case 2:
    case 3:
      console.log('冬');
      break;
    case 4:
    case 5:
    case 6:
      console.log('春');
      break;
    case 7:
    case 8:
    case 9:
      console.log('夏');
      break;
    case 10:
    case 11:
    case 12:
      console.log('秋');
      break;
      break;
    default:
      console.log('そんな月はありません。');
      break;
  }
})();