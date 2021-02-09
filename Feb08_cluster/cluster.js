const os = require('os');
const cluster = require('cluster'); 
console.log(os.cpus().length);
cluster.setupMaster({
exec:'index.js'});
for (var i = 0; i < os.cpus().length;i++){
cluster.fork();}

console.log(Worker.process.pid) 
cluster.on("exit", (worker) =>{
cluster.fork()});
