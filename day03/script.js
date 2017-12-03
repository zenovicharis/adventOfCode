var input = 361527;

var ceilNum = Math.ceil(Math.sqrt(input));
var floorNum = Math.floor(Math.sqrt(input))
var gridSide = getGridSide(input);

var nearestSq = (Math.pow(ceilNum, 2) - input) < (input - Math.pow(floorNum, 2)) ? ceilNum : floorNum;

var distance = input - Math.pow(nearestSq, 2) ;

console.log(distance);