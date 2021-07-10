// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

// 4. Printed all the array contents
// 5. We need to print all the first Name 
// 6. we need to print All the males 
// 7. we need to print All the malefemaless 

const usersArray = require('./data');
let importedArray = require('./data')

const getAllDataTable= arr=>{
    arr.forEach(element => {
        // Name : 
       var { firstName,
            lastName,
            id,
            isActive, 
            balance,
            gender,
           }= element

           console.log(`${id}\t${firstName}\t\t${lastName}\t${gender}\t${isActive}\t ${balance} `)
    });
}


const getAllMales= arr=>{
    arr.forEach(element => {
        // Name : 
       
        var { firstName, lastName, id, isActive,  balance, gender, }= element

        if(gender==="male"){
           console.log(`Id: ${id}\n First Name : ${firstName}\n 
           Last Name ${lastName}\n Gender ${gender}\n Active : ${isActive}\n 
           Balance :${balance} `)
        }
    });
}

const getFirstNames = arr => {
    const userFirstNames = [];
    for (let user of arr) {
      // Your code goes here ...
    }
  };

  getAllDataTable(usersArray)

  //getFirstNames(usersArray);
  /// Call Stack Mechanism 
