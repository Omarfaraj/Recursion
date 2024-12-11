// the code shoudl be using Recursive Function for the code to work
// use the code above and make the following code block
// using the % for two numbers 50 and 75
// if % 2 and the answer is 0= even/1= odd/any other number N-2 si the result
// and also usingit on -1 to see the challenge

function modularOperator() {
    const checkNumbers = [50, 75];
    
    for (const num of checkNumbers) {
        if (num >= 0 && num !== 0) {
            if (num % 2 === 0) {
                console.log(num, "is even");
            } else {
                console.log(num, "is odd");
            }
        }else if (num === -1) {
            console.log("Checking negative one...");
        } else {
            console.log("Number is zero");
        }
    }
}  
        
 modularOperator();