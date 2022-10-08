const os=require("os");   //Documentaion is available in npmjs.org

const totalmemory=os.totalmem();
const freeMemory=os.freemem();

console.log(`Total Memory : ${totalmemory}`);
console.log(`Free Memory : ${freeMemory}`);