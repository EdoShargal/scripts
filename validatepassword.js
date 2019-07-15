function isValidate(password){
	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*(.)\1\1)[!-~”’]{6,24}$/.test(password);
}

// Rules:

// 1) Length between 6 and 24 characters.
// 2) At least one uppercase letter (A-Z).
// 3) At least one lowercase letter (a-z).
// 4) At least one digit (0-9).
// 5) Maximum of 2 repeated characters.
// 6) "aa" is OK 👍
//    "aaa" is NOT OK 👎
// 7) Supported Special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; ” ’ ? < > , .