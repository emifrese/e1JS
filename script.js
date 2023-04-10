const evenOrOdd = (a) => {
	let message = "Par";

	if (a % 2 !== 0) {
		message = "Impar";
	}

	console.log(message);
};

// evenOrOdd();
// evenOrOdd(2);
// evenOrOdd(3);

const greaterOrEqual = (a, b) => {
	let message = `${a} es el mayor de ambos numeros`;
	if (a === b) {
		message = "Ambos numeros son iguales";
	} else if (b > a) {
		message = `${b} es el mayor de ambos numeros`;
	}

	console.log(message);
};

// greaterOrEqual(1, 2)
// greaterOrEqual(3, 1)
// greaterOrEqual(1, 1)

const isMultipleOf5 = (a) => {
	let message = `${a} es multiplo de 5`;

	if (a % 5 !== 0) {
		message = `${a} no es multiplo de 5`;
	}

	console.log(message);
};

// isMultipleOf5(5)
// isMultipleOf5(18)
// isMultipleOf5(40)

const previousNumbers = (a) => {
	for (let i = 0; i < a; i++) {
		console.log(i);
	}
};

// previousNumbers(10)
// previousNumbers(1)
// previousNumbers(5)

const palabraNVeces = (palabra, n) => {
	for (let i = 0; i < n; i++) {
		console.log(palabra)
	}
}

// palabraNVeces("hola", 1)
// palabraNVeces("chau", 5)
// palabraNVeces("prueba", 10)

const contenidoArray = (array) => {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i])
	}
}

// contenidoArray([1,2,3,4])
// contenidoArray(["hola", "chau", "prueba"])
// contenidoArray([0, "adios", 2378, "que"])

const todosMenosEl5to = (array) => {
	for (let i = 0; i < array.length; i++) {
		if(i === 4){
			continue;
		}
		console.log(array[i])
	}
}

todosMenosEl5to([1,2,3,4,5,6,7,8,9,10])
todosMenosEl5to([4,7,36,45,73,212,452,234,23,42])
todosMenosEl5to([1,1,1,1,5,1,1,1,1,1])
