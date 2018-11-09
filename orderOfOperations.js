// Order of Operations in JavaScript video

/* Order of Operations
   PEMDAS -> PEDMAS
   Please Excuse My Dear Aunt Sally
   Paranthesis
   Exponents
   Multiplication 5 / 5 * 4
   Division
   Addition
   Subtraction
*/

/*
it calculates this in order first
Please -> Parans ()
Excuse -> Exponents **
My -> Multiplication *
Dear -> Division /
Aunt -> Addition +
Sally -> Subtraction -

8 + 2 * 5 - (9 + 2) ** 2
8 + 2 * 5 - 11 ** 2
8 + 2 * 5 - 121
8 + 10 - 121
-103
*/

calculation = 8 + 2 * 5 - (9 + 2) ** 2

print(calculation)

var num = 5 + (5 * 10) / 6**2 - 1;
var num = 5 / 5 * 4;