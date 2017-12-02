console.log(numbers);

var sum = 0;
var i = 0;

numbers.forEach(element => {
    // ++i; First Solution
    sum += (element == numbers[halfwayIndex(i)]) ? Number(element) : 0;
    i++ // Second Solution
});
// First Solution
// function nextIndex(i){
//     return numbers.length == i ? 0 : i; 
// }

function halfwayIndex(i){
    let halfway = (numbers.length / 2) + i;
    return numbers.length > halfway ? halfway : halfway - numbers.length
}
console.log(sum)
