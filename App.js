const {v4 : uuidv4} = require('uuid');

setInterval(myFunctionUuid, 1000);

function myFunctionUuid(){
    const uuid = uuidv4();
    console.log(uuid);
}

