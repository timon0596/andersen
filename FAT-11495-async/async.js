function promiseRace(promisesArray) {
  let counter = promisesArray.length;
  const errors = [];
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((er) => {
          errors.push(er);
          counter--;
          if (!counter) {
            reject(errors);
          }
        });
    });
  });
}

const promises = [
  new Promise((res, rej) => {
    setTimeout(rej, 3300, 1);
  }),
  new Promise((res, rej) => {
    setTimeout(rej, 3000, 2);
  }),
  new Promise((res, rej) => {
    setTimeout(rej, 3330, 3);
  }),
];

const promises1 = [
  new Promise((res, rej) => {
    setTimeout(res, 3300, 1);
  }),
  new Promise((res, rej) => {
    setTimeout(res, 3000, 2);
  }),
  new Promise((res, rej) => {
    setTimeout(res, 3330, 3);
  }),
];

promiseRace(promises).then((data) => {
  console.log(data);
}).catch((er) => {
  console.error(er);
});

promiseRace(promises1).then((data) => {
  console.log(data);
}).catch((er) => {
  console.error(er);
});

function fetchPolyfill(url, method = 'GET') {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      res(xhr.response);
    };
    xhr.onerror = () => {
      rej(xhr.response);
    };
    xhr.send();
  });
}

function promiseAll(promisesArray) {
  const output = new Arra