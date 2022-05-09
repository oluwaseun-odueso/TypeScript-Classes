"use strict";
class Fan {
    constructor(speed = 1, radius = 5, color = 'blue', on = false) {
        this.speed = speed;
        this.radius = radius;
        this.color = color;
        this.on = on;
    }
    getSpeed() {
        if (this.speed == 1) {
            return "SLOW";
        }
        else if (this.speed == 2) {
            return "MEDIUM";
        }
        else {
            return "FAST";
        }
    }
    set Speed(speed) {
        this.speed = speed;
    }
    get Radius() {
        return this.radius;
    }
    set Radius(radius) {
        this.radius = radius;
    }
    get Color() {
        return this.color;
    }
    set Color(color) {
        this.color = color;
    }
    getIsOn() {
        if (this.on == true) {
            return "On";
        }
        else {
            return "Off";
        }
    }
    set isOn(on) {
        this.on = on;
    }
}
const fan1 = new Fan(3, 10, 'yellow', true);
const fan2 = new Fan(2, 5, 'blue', false);
console.log("Fan1 \nspeed\t", fan1.getSpeed(), "\nradius\t", fan1.radius, "\ncolor\t", fan1.color, "\nOn/Off\t", fan1.getIsOn());
console.log("\n\nFan2 \nspeed\t", fan2.getSpeed(), "\nradius\t", fan2.radius, "\ncolor\t", fan2.color, "\nOn/Off\t", fan2.getIsOn());
