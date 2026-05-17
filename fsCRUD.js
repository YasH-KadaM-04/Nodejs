const fs= require('fs');


// Creating the File 
fs.writeFileSync('Files/Fruits.txt',"Java,python,C");

//Read File
const read=fs.readFileSync('Files/Skill.txt','utf-8');
console.log(read);

//Update files
fs.appendFileSync('Files/Skill.txt'," Nodejs");

//Delete Files
fs.unlinkSync('Files/Fruits.txt');