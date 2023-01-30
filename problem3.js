/*****************************Problem 3************************ */
//Write a function called make_avg() which will take an array of integers and size of that array and return the average of those value
function make_avg(scores, scoresSize){
    var sum =0;
    for(var i =0; i < scoresSize; i++){
         sum += scores[i];
    }
    return sum / scoresSize;
}
var scores =[50, 60, 95, 65, 35, 60, 45, 77, 66, 84,6];
var scoresSize = scores.length;
var showAverage =make_avg(scores, scoresSize);
var showAverageTwoDecimal = showAverage.toFixed(2);
console.log(showAverageTwoDecimal);