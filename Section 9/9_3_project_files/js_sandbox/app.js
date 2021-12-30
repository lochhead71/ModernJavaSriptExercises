let re;
// literal characters
re = /howdy/;
re = /howdy/i;
// metacharacter symbols
re = /^h/i; // means must start with [value]
re = /!$/i; // means must end with [value]
re = /^howdy!$/i; // means must start and end with [total value]
re = /^h.wdy!$/i; // matches any one character
re = /h*y!/i; // matches any character 0 or more times
re = /gre?a?y/; // '?' after any character means it's optional
re = /gre?a?y\?/; // '\' before any character escapes any metacharacter properties
// Brackets [] - character sets
re = /gr[ea]y?/i; // matches any character inside of brackets
re = /[GF]ray?/; // matches any character inside of brackets - case senstive
re = /[^GF]ray?/; // '^' matches anything OTHER than characters inside of brackets - case senstive
re = /[A-H]ray?/i; // dash between inside of brackets characters creates a range
re = /[A-Za-z]ray?/; // another way to indicate any letter a-z case insensitive
re = /[A-Z][0-9]ray?/; // you can stack brackets back to back

// Braces {} - Quantifiers
re = /hel{2}o/i; // must occur exactly {value} number of times
re = /hel{2,4}o/i; // adding comma and second value creates range
re = /hel{2,}o/i; // must occur a minumum of {value} times

// Parenthesis () - used for grouping (just like math)
re = /[0-9]x{3}/; // this would match '2xxx'
re = /([0-9]x){3}/; // this would match '2x3x4x'
re = /^([0-9]x){3}$/; // without the '^' at the beginning and '$' at the end it only looks at the first 6 characters - this requires exactly 6 characters

// Shorthand Character Classes
re = /\w/; // Word Character - alphanumeric or _
re = /\w+/; // Examines all Word Characters
re = /\W/; // Non-word Characters
re = /\d/; // match any digit
re = /\d+/; // match any digit 0 or more times
re = /\D/; // match any non-digit
re = /\s/; // match white space characters
re = /\S/; // match any non-white space characters
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// string to match
const str = 'Max loves my xylophone';
// log result
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
	if (re.test(str)) {
		console.log(`${str} matches ${re.source}`);
	} else {
		console.log(`${str} DOESN'T match ${re.source}`);
	}
}
reTest(re, str);
