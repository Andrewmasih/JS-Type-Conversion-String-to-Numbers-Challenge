/* String to numbers is also useful for adjusting colour brightness, lookat the example.

whiteHex has been defined, whch represents the hexadecimal value of the colour white (ffffff)

To adjust the brightness, convert the hexadecimal number to decimal subject1, and then convert it back.

Challenge:

1/ convert the whiteHex varible to a decimal using the 'parseInt()' function, and store it in a varible, 'whiteHex'

2/ subtract 1 from 'whiteDecimal' abd store it in a varible 'offWhiteDecimal'.

3/ convert 'offWhiteDecimal' back to hex and store it in a varible 'offWhiteHex'

Requirements:

1/ all varibles must have the proper values and data types.

dont forget: the parseInt() function can take 2 arguments dont forget what base you are working with.

*/


let whiteHex = "ffffff";

let whiteDecimal = parseInt(whiteHex, 16);
let offWhiteDecimal = whiteDecimal -1;
let offWhiteHex = offWhiteDecimal.toString(16);

console.log(whiteHex);
console.log(whiteDecimal);
console.log(offWhiteDecimal);
console.log(offWhiteHex);

