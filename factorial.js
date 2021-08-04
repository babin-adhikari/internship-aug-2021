function factorial(number){
    if(number<0){
        console.log("Error Factorial of negative number doesn't exist");
    }else if (number === 0){
        console.log('Factorial of 0 is 1')
    }else{
        let fact = 1;
        for(i=1;i<=number;i++){
            fact *= i;
        }
        console.log(`The factorial of ${number} is ${fact}.`);
    }
}

factorial(3);