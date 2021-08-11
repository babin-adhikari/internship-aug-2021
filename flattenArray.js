let outputArray = [];

function flatten(inputArray){
    let array = [...inputArray];
    let lengthOfArray=array.length;
    for(let index=0; index<lengthOfArray;index++){
        if(!Array.isArray(array[index])){
            outputArray.push(array[index]);
        }else{
            flatten(array[index]);
        }
    }
}

let mixedArray = [100, 5, 'a', [3, 1, 5], 7, 9, [3, ['a', 'b']]];

flatten(mixedArray);

console.log(outputArray);