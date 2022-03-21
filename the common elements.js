var arr1=[1, 2, 3],
    arr2=[100, 2,2, 1, 10];

function common(arr1,arr2) {
    var arr3=[],k=0,n=0,bool=false;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i]===arr2[j]) {
                n=0;bool=false;
                while (n<arr3.length && bool==false) {
                    arr1[i]===arr3[n] ? bool=true : bool=false;n++;
                }
                if (bool==false) {
                    arr3[k]=arr1[i];k++;
                }
            }
        } 
    }
 
    return arr3;
}
console.log(common(arr1,arr2))