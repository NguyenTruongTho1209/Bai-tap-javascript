/**
 * Var x = 2
Var a = 8 + x++ + ++x - --x + x++ + 7
Var b = 5 + ++x + ++x + --x - x-- - ++x  + 10
Var c = 1 + x-- + --x - ++x + --x - 11
Var d = 15 + --x + --x - x++ +--x + 12
a,b,c d có giá trị là bao nhiêu ?
 */
var x = 2;

var a = 8 + x++ + ++x - --x + x++ + 7;
//      8 + 2   +   4 -   3 + 3   + 7 = 21
var b = 5 + ++x + ++x + --x - x-- - ++x  + 10;
// //      5 +   3 +   4 +   3 - 3   -   3  + 10 = 19
var c = 1 + x-- + --x - ++x + --x - 11;
//      1 + 2   +   0 -   1 +   0 - 11 = -9;
var d = 15 + --x + --x - x++ +--x + 12;
//      15 +   1 +   0 - 0   +  0 + 12 = 28;
console.log(c);