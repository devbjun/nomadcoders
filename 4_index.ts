const sayHi = (name: string, age: number, gender: "male" | "female") => {
	console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi("Kwan", 29, "male");