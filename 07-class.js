class Person {
    static nationality = 'India';

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

const john = new Person( 'John', 32 );
console.log( john );
console.log( Person.nationality );
john.celebrateBirthday;
console.log( john.age );