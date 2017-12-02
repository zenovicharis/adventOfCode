function getMax(array){
    let max = -Infinity;
    array.forEach(element => {
        if(max < Number(element)){
            max = Number(element);
        }
    });

    return max;
}

function getMin(array){
    let min = Infinity;
    array.forEach(element => {
        if(min > Number(element)){
            min = Number(element);
        }
    });

    return min;
}

function getDivisible(row){
    for(var i = 0; i < row.length; i++){
        for(var k = 0; k < row.length; k++){
            if(k == i) continue;
            if((Number(row[i]) % Number(row[k])) == 0){
                console.log((Number(row[i]) / Number(row[k])));
                return (Number(row[i]) / Number(row[k]))
            }
        }
    }
}
// First Part of Problem
// var sum = 0;
// result.forEach(row => {
//     sum += (getMax(row) - getMin(row));
// });

var sum = 0;
result.forEach(row => {
    sum += getDivisible(row);
});

console.log(sum)
