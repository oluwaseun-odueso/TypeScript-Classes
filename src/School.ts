class Students {
    fullName : string
    email : string
    studentClass : string

    constructor (fullName : string, email : string, studentClass : string) {
        this.fullName = fullName;
        this.email = email;
        this.studentClass = studentClass;
    }
}

class Staff {
    fullName : string
    email : string
    department : string

    constructor (fullName : string, email : string, department : string) {
        this.fullName = fullName;
        this.email = email;
        this.department = department;
    }
}

class Lecturers extends Staff {
    highestQualification : string
    yearsOfExperience : number

    constructor(fullName : string, email : string, department : string, highestQualification : string, yearsOfExperience : number) {
        // Inherent behavior
        super(fullName, email, department);

        // Custom behavior
        this.highestQualification = highestQualification;
        this.yearsOfExperience = yearsOfExperience
    }
}

const lecturer1 = new Lecturers("Olatade Akinbowale", "olatadeakinbowale@gmail.com", "social networking", "MSc", 7)
console.log(lecturer1.fullName)