    let number = (prompt("Enter a number:"));
    num=parseInt(number);


    if (num % 2 == 0) {
        console.log("Even");
    } 
    else if(num % 2 == 1){
        console.log("Odd");
    }
    else{
        console.log("Enter a valid number");
    }


