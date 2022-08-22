function checkIfTriangle(a, b, c)

{


	if ( b + c <= a || a + c <= b || a + b <= c )

		return false;

	else

		return true;

}

	let a = 7, b = 10, c =9;
	

	if (checkIfTriangle(a, b, c))

		console.log("Triangle");

	else

		console.log("Non Triangle");