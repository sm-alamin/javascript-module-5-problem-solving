/********************************Problem 4******************************** */
// Write a function called odd_even() and takes an integer value and tells wether this value is  odd or even. 
// You must have to do it in 4 ways:

//has parameter and return
// function odd_even(number) {
//     var check = number % 2;
//     even = "The number is Even";
//     odd = "The number is Odd";
//     if(check === 0 ) {
//         return even;
//     }else{
//         return odd;
//     }
// }
// var checkOddEven = odd_even(90);
// console.log(checkOddEven);

//has parameter and return
function odd_even(number) {
    var check = number % 2;
    if(check === 0 ) {
        console.log("the number is even");
    }else{
        console.log("the number is odd")
    }
}
odd_even(41);