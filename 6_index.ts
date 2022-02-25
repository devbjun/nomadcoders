type Gender = "male" | "female"

interface Human {
	name: string,
	age: number,
	gender: Gender
}

const sayHi3 = (human: Human): string => {
	return `Hello ${human.name}, you are ${human.age}, you are a ${human.gender}`;
};

console.log(sayHi3({
	name: "Kwan", 
	age: 29, 
	gender: "male"
}));