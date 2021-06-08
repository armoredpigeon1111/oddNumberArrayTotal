let numbersArray = [4, 3, 9, 11, 2, 1]; //makes number array
arrayPractice(numbersArray);


function arrayPractice(numArray){
    var grandTotal = 0;
    for(i=0; i<numArray.length; i++){ //loops through array
        if(numArray[i]%2 != 0)        
        grandTotal += numArray[i];
    }
    console.log(grandTotal);
}
