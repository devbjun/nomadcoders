const sayHi2 = (name: string, age: number, gender: "male" | "female"): string => {
	return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi2("Kwan", 29, "male"));