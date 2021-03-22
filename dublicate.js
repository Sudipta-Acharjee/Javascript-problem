// var name = [3, 6, 2, 7, 3, 2, 8, 1, 9, 11, 56];
// var uniqueRoll = [];
// 
// for (var i = 0; i < name.length; i++) {
// var element = name[i];
// var index = uniqueRoll.indexOf(element);
// if (index == -1) {
// uniqueRoll.push(element);
// }
// }
// console.log(uniqueRoll);

var roll = [11, 20, 12, 15, 40, 12, 11, 22];
var uniqueRoll = [];

for (var i = 0; i < roll.length; i++) {
    var element = roll[i];
    var index = uniqueRoll.indexOf(element);
    if (index == -1) {
        uniqueRoll.push(element);
    }
}
console.log(uniqueRoll);