function numberOfExtractions(inputArray, noOfExtraction){
    // The spread operator is used to make SHALLOW COPY of JS Objects
    let array = [...inputArray];
    let outputArray = [];

    // Using the Slice Operator
    // lastIndex = array.length;
    // console.log(lastIndex);
    // outputArray = array.slice(lastIndex-noOfExtraction,lastIndex);

    for(let i=0; i<noOfExtraction; i++){
        element = array.pop();
        outputArray.unshift(element);
    }
    return outputArray;
}

let sampleArray = [3,4,5,3,5,3,4,2];

// Array before operation
console.log(sampleArray);

let outputArray = numberOfExtractions(sampleArray,3);

// Array After Operation
console.log(sampleArray);

// Required Ouput
console.log(outputArray);

