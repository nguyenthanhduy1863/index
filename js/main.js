var person = {
    firstName: "Duy",
    lastName: "Nguyen",
    age: 19
}

var result = Object.values(person);
for(var key of result){
    console.log(key)
}