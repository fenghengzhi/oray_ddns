var promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 10000, 'foo');
});

console.log(promise1);
// expected output: [object Promise]
promise1.then(d=>console.log(d))
