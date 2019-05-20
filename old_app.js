const util = require('./util');
var validator = require('validator');
var chalk = require('chalk');
var fs = require("fs");
const yargs = require('yargs');

/* console.log(util.lolwa)
console.log(util.sd)
console.log("lolwa")

console.log(validator.isEmail('indraraj@gmail.com'));
console.log(validator.isURL('googlecom')); 
console.log(chalk.blue(" I am blue"));
console.log(chalk.red.inverse.bold(" I am red")); */
/* fs.writeFile("hello.txt","hello i am from app.jssss", err => {
    if(err) {
     throw err;
    }
    console.log(chalk.green("Success"))
})
fs.appendFile("hello.txt", "\nagain i am from app.js", err => {
    if(err) {
        throw err;
    }
    console.log(chalk.green("Success#2"))
}) */

console.log(process.argv[2])
yargs.command({
    command:'add',
    describe:'add a note',
    handler: function () {
        console.log("adding a note");
    }
})