const x_array:  Array<string> = ['my', 'name', 'is', 'jeff'];

function checkValue(arrayValue: Array<string>, index: number) {
    return arrayValue?.[index];
}


console.log(checkValue(x_array,0));
console.log(checkValue(x_array,1));
console.log(checkValue(x_array,2));
console.log(checkValue(x_array,3));
console.log(checkValue(x_array,4)); // must returns undefined
