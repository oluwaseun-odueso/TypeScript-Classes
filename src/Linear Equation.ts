// This program creates a class for linear equations.
class linearEquations {
    a : number
    b : number 
    c : number 
    d : number 
    e : number 
    f : number

    constructor(a : number, b : number, c : number, d : number, e : number, f : number) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
    }

    get A() : number {
        return this.a;
    }

    get B() : number {
        return this.b;
    }

    get C() : number {
        return this.c;
    }

    get D() : number {
        return this.d;
    }

    get E() : number {
        return this.e;
    }

    get F() : number {
        return this.f;
    }

    get X() : number {
        return ((this.e * this.d) - (this.b * this.f)) / ((this.a * this.d) - (this.b * this.c)); 
    }

    get Y() : number {
        return ((this.a * this.f) - (this.e * this.c)) / ((this.a * this.d) - (this.b * this.c));
    }

    isSolvable() : boolean {
        return ((this.a * this.d) - (this.b * this.c)) != 0
    }
}

// Test function
function testCase(ar : any) {
    if (ar.isSolvable()) {
        console.log("x is", ar.X, "and y is", ar.Y);
    }
    else {
        console.log("The equation has no solution")
    }
    
}

// Test variables
const newCase = new linearEquations(9.0, 4.0, 3.0, -5.0, -6.0, -21.0);
const otherCase = new linearEquations(1.0, 2.0, 2.0, 4.0, 4.0, 5.0);

// Function call for test cases
testCase(newCase);
testCase(otherCase);

// Done! Bonne! 