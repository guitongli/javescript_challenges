exports.projectList = function (){
const fs = require("fs");
const projects = fs.readdirSync (__dirname+'/projects');

var htmlList = ''
for(var i = 0; i<projects.length; i++) {
if (projects[i].indexOf(".") !== 0) {
htmlList += `<div><a href='/${projects[i]}/'>${projects[i]}</a>`;}
}; 
return htmlList;}