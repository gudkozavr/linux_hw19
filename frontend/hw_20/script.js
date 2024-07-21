class Shape {
  draw() {
    console.log("1");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("2");
  }
}
class Circle extends Shape {
  draw() {
    console.log("3");
  }
}

const rectangle = new Rectangle();
const circle = new Circle();

const arrayGeometry = [rectangle, circle];
console.log(arrayGeometry);

for (let el of arrayGeometry) {
  el.draw();
}
