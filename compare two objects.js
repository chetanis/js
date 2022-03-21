var obj1={
        firstname:"shush",
        lastname:"shish"
    },
    obj2={
        blabla:"suii",
        firstname:"shush",
        lastname:"shish"
    };
  
function compare(obj1,obj2) {
    for(var key in obj1){
        if (obj1[key]!==obj2[key]) {
            return false
        }
    }
    return true
}  
console.log(compare(obj1,obj2));