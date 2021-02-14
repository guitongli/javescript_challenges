const fs = require("fs");
const util = require("util");

// console.log(stats, stats.isFile());

const readFile = util.promisify(fs.readdir);
const readStat = util.promisify(fs.stat);

function logSize(location) {
    readFile(location)
        .then(function (items) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].isFile() == true) {
                    var newLocation = location + "/" + items[i].name;
                    readStat(newLocation)
                        .then((item) => {
                            console.log(newLocation + ":" + item.size);
                        })
                        .catch((err) => console.log(err));
                } else if (items[i].isDirectory() == true) {
                    logSize(location + "/" + items[i].name);
                }
            }
        })
        .catch((err) => console.log(err));
}

logSize(__dirname);
