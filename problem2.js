// ***************************Problem 2 **************************
//Write a function called make_avg() which will take three integers and return the average of those values

function make_avg(a, b, c) {
    var total = parseInt(a + b + c);
    var average = total / 3;
    var showAvgTwoDecimal = average.toFixed(2);
    return showAvgTwoDecimal;
}
var showAverage = make_avg(10,22,45);
console.log(showAverage);