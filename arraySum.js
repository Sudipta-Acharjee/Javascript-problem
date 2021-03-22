// var number = [12, 412, 354, 35, 31, 312, 321, 354, 76, 654, 654, 465]
// var sum = 0;
// for (i = 0; i < number.length; i++) {
// var total = number[i];
// var sum = sum + total;
// }
// console.log("Total number", sum);


function arraySum(number) {
    var sum = 0;
    for (i = 0; i < number.length; i++) {
        var total = number[i];
        var sum = sum + total;
    }
    return sum;
}
var number1 = [12, 412, 354, 35, 31, 312, 321, 354, 76, 654, 654, 465]
var result = arraySum(number1)
console.log("Total Number", result);