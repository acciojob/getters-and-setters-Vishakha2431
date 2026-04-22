class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	getName(): string {
		return this.name;
	}

	setAge(age: number): void {
		this.age = age;
	}
}

class Student extends Person {
	study(): void {
		console.log(this.name + " is studying");
	}
}

class Teacher extends Person {
	teach(): void {
		console.log(this.name + " is teaching");
	}
}

// Do not change below
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;