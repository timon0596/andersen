function sum(...args) {
  return args.reduce((acc, el) => acc + el);
}

function sum2(a) {
  return function (b) {
    return a + b;
  };
}

function cur(arg) {
  const terms = [];
  terms.push(arg);
  return function innerFunc(arg2) {
    if (arguments.length) {
      terms.push(arg2);
      return innerFunc;
    }
    return terms.reduce((acc, el) => acc + el);
  };
}
console.log(cur(1)(2)(3)(4)(5)());

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind - what '
        + 'is trying to be bound is not callable');
    }

    const aArgs = Array.prototype.slice.call(arguments, 1);
    const fToBind = this;
    const fNOP = function () {};
    const fBound = function () {
      return fToBind.apply(
        (
          this instanceof fNOP
            && oThis ? this : oThis
        ),
        aArgs.concat(Array.prototype.slice.call(arguments)),
      );
    };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

function mediana(...args) {
  const arr = args.flat();
  arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  }
  return arr[Math.floor(arr.length / 2)];
}

console.log(mediana([1, 2, 3, 7, 8, 4, 2]));
console.log(mediana(1, 2, 3, 7, 5, 8, 4, 2));
