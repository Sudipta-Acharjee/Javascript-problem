

var marks = [11, 12, 13, 14, 15];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var newLocal = marks[i];
    if (newLocal > max) {
        newLocal = max;
    }
}
console.log(newLocal);

var marks = [11, 12, 13, 14, 15];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var newLocal = marks[i];
    if (newLocal > max) {
        max = newLocal;
    }
}
console.log(newLocal);