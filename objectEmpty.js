//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
let schedule = {};

alert( isEmpty(schedule) ); 

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );

function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
