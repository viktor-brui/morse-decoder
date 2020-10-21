const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
	outPut = "";
	let newExpr = expr.match(/.{1,10}/g);
  	for (let i = 0; i < newExpr.length; i++) {
    	if (newExpr[i] === "**********") {
      		outPut += " ";
    	} else {
				let letter = newExpr[i].match(/.{1,2}/g);
				let letterMorse = "";
				letter.forEach(item => {
					if (item === '10') {
						letterMorse += '.';
					} else if (item === '11') {
						letterMorse += '-';
					}
				});
				outPut += MORSE_TABLE[letterMorse];
    	}
	}
	console.log(outPut);
  	return outPut;
}

module.exports = {
	decode,
};

