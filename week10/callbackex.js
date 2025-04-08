function greeting(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function afterGreeting() {
  console.log('This is a callback function.');
}

greeting('Harsh', afterGreeting);


