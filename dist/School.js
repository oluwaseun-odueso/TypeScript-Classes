"use strict";
class Students {
    constructor(fullName, email, studentClass) {
        this.fullName = fullName;
        this.email = email;
        this.studentClass = studentClass;
    }
}
class Staff {
    constructor(fullName, email, department) {
        this.fullName = fullName;
        this.email = email;
        this.department = department;
    }
}
class Lecturers extends Staff {
    constructor(fullName, email, department, highestQualification, yearsOfExperience) {
        // Inherent behavior
        super(fullName, email, department);
        // Custom behavior
        this.highestQualification = highestQualification;
        this.yearsOfExperience = yearsOfExperience;
    }
}
const lecturer1 = new Lecturers("Olatade Akinbowale", "olatadeakinbowale@gmail.com", "social networking", "MSc", 7);
console.log(lecturer1.fullName);
