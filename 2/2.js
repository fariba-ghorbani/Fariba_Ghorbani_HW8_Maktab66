function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        console.log(Math.PI * (this.radius**2));
    }
    this.getPerimeter = function() {
        console.log(2 * Math.PI * (this.radius));
    }
}

const circle1 = new Circle(11);
circle1.getArea();
// /////////////////////
const circle2 = new Circle(4.44);
circle2.getPerimeter();