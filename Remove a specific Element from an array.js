var arr1=[1,"3",4,5];
var arr2=[1,"3",4,5,6,'h'];
function remove1(array,x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]===x) {
            for (let j = i; j < array.length; j++) {
                array[j]=array[j+1];
            }
        }    
    }
    return array;
}

function remove2(array,x) {
    var array2 = [];
    let j=0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]!==x) {  
            array2[j]=array[i];
            j++;
        }
    }
    return array2;
}
console.log(remove1(arr1,'3'));
console.log(remove2(arr2,6));
