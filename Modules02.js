// modules are of three types core module, third party module, user module 
const fs= require ("fs");// Core module
fs.writeFileSync('YasH.txt',"Hello there i am Here");
// const os= require('os');
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.hostname());
// Global 
// console.log(process.cwd())
// console.log(process.pid)

const {log,warn}=require("console");
log("Hello YasH");
warn("MadarChod")