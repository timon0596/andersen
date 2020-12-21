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
  const output = new Array(promisesArray.length);
  let counter = 0;

  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          output[index] = value;
          counter += 1;
          if (counter === promisesArray.length) {
            resolve(output);
          }
        })
        .catch(reject);
    });
  });
}
