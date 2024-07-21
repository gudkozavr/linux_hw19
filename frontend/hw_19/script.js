function Counter() {
  this.count = 0;

  this.increment = function () {
    this.count++;
  };

  this.decrement = function () {
    this.count--;
  };
}

const counter = new Counter();

counter.increment();
console.log(counter.count);

counter.decrement();
console.log(counter.count);
