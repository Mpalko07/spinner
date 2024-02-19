const slashes = ['|', '/', '-', '\\', '|'];
const delay = 200;

const spinner = () => {
  let index = 0;
  for (const slash of slashes) {
    setTimeout(() => {
      process.stdout.write(`\r${slash}   `);
    }, delay * index);
    index++;
  }
};

spinner();