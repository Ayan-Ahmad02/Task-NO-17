const DivisionNumber = (num1 , num2) => {
    return new Promise((resolve , reject) =>{
        if(num2 == 0){
            reject ("Error : Division by zero is not allowed.");
        }else{
            resolve(num1/num2);
        }
    });
};

DivisionNumber(30,6)
    .then(result => console.log("Case 1 result: ", result))
    .catch(error => console.log("Case 2 error: ", error));

DivisionNumber(30,6)
    .then(result => console.log("Case 1 result: ", result))
    .catch(error => console.log("Case 2 error: ", error));

DivisionNumber(18,2)
    .then(result => console.log("Case 1 result: ", result))
    .catch(error => console.log("Case 2 error: ", error));

DivisionNumber(20,5)
    .then(result => console.log("Case 1 result: ", result))
    .catch(error => console.log("Case 2 error: ", error));

DivisionNumber(10,0)
    .then(result => console.log("Case 1 result: ", result))
    .catch(error => console.log("Case 2 error: ", error));