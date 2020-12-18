Object.create = function (o) {
  function F() {}
  F.prototype = o;
  return new F();
};

function A(a) {
  this.a = a;
}

A.prototype.getProduct = function () {
  return this.a ** 2;
};

function B(a, b) {
  A.call(this, a);
  this.b = b;
}

B.prototype = Object.create(A.prototype);

B.prototype.getProduct = function () {
  return A.prototype.getProduct.call(this) * this.b;
};

const a = new A(2);
const b = new B(2, 2);
console.log(b.getProduct());// 8
console.log(a.getProduct());// 4
