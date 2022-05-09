"use strict";
// Creating a rectangle class
class Rectangle {
    constructor(width = 1, height = 2) {
        this.width = width;
        this.height = height;
    }
    // Get width 
    get Width() {
        return this.width;
    }
    // Get height
    get Height() {
        return this.height;
    }
    // Set width 
    set Width(updateWidth) {
        this.width = updateWidth;
    }
    // Set height
    set Height(updateHeight) {
        this.height = updateHeight;
    }
    // Get area
    get area() {
        return this.width * this.height;
    }
    // Get Perimeter
    get perimeter() {
        return 2 * (this.width + this.height);
    }
}
const a = new Rectangle(4, 40);
const b = new Rectangle(3.5, 35.7);
console.log("The area for rectangle A is", a.area, "and the perimeter is", a.perimeter);
console.log("The area for rectangle B is", b.area, "and the perimeter is", b.perimeter);
