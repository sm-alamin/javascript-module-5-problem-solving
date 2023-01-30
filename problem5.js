// ********************************** Problem 5 **************************
//You are in hurry to go to your school on time. But, when you are crossing the road, the traffic signal is red colored. In this situation, if you try to cross the road, you may be in danger. If you notice a yellow colored traffic signal, you should stop. If you notice a green colored signal, you should cross the road. So, write a js code, where there is a variable called signal. It's value can be green ,yellow, or red && we will get different activities as output depending on the variable. So, hurry up.


/**************** problem solved by switch statement *******************/
var signal = "green";
switch (signal) {
    case 'red':
        console.log("If you try to cross the road, you may be in danger");
        break;
    case 'yellow':
        console.log("You should stop");
        break;
    case 'green':
        console.log("You should cross the road");
        break;
    default:
        console.log("Signal indicator is damaged. Open your eyes, if you do not see any traffic then cross the road otherwise wait sometime")
        break;
}

/**********************problem solved by if else statement***********************/
/* var signal = 'yellow';
if(signal === 'red') {
    console.log("If you try to cross the road, you may be in danger");
}else if(signal === 'yellow') {
    console.log("You should stop");
}else if(signal === 'green') {
    console.log("You should cross the road");
}else{
    console.log("Signal indicator is damaged. Open your eyes, if you do not see any traffic then cross the road otherwise wait sometime")
}

*/