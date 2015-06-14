/*
Largest prime factor
Problem 3
-
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

var isPrimeFactor = function(a,b){
    if(a%b!==0){
        return false;
    }
    else{
        for(var i=2; i<b; i++){
            if(b%i===0){
                return false;
            }
        }
    }
    return true;
}
var getLargestPrimeFactor = function(num){
    var result = 1;
    for(var i=2;i<=num;i++){
        if(isPrimeFactor(num,i)){
            if(i>result){
                result = i;
            }
            num /= i;
        }
    }
    return result;
}

var number = 600851475143;
console.log("The largest prime factor of " + number + " is " + getLargestPrimeFactor(number) + ".");