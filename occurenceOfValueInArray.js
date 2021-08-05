// [1,2,3,4,3,3,4,2,2]

function numberOfOccurenceOfValueInArray(array,value){
    let noOfOccurence=0;
    for(let number of array){
        if(number === value){
            noOfOccurence++;
        }
    }
    return noOfOccurence;
}

const sampleArray = [1,2,3,4,3,3,4,2,2];

let totalNo = numberOfOccurenceOfValueInArray(sampleArray,2);

console.log(totalNo);

