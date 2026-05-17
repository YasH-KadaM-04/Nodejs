// Sync  Programing : Means one task completly executed Then next Task wil Be Taken For the Execution  For Ex: When We Print  it will be executeed one by like 
console.log("HEllo1");
console.log("HEllo2");
console.log("HEllo3");
// Here The o/p will be One after Another means Hello1  executed then Hello 2 console Executed That is Called Synchronous Programming

//Asyn Programming; In this the One task is in execution and another is taken into Consideration  like wise execution perfrom  EX==> 

let fs=require('fs');
fs.readFile('YasH.txt','utf-8',(err,data)=>{
    if(err){
        return false
    }
    else{
console.log(data);

    }
});
console.log("Run First");

// here when  you run you observe that Run First Log o/p will be displayed first  even though we  have wrote it down but progrma Run Asynchronously  And Display  as shown