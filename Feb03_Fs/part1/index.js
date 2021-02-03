const fs = require("fs");

// console.log(stats, stats.isFile());

function logSize(location) {
    fs.readdir(location, { withFileTypes: true }, function (err, items) {
        if (err) {
            console.log(err);
        } else {
            for (var i = 0; i < items.length; i++) {
                if (items[i].isFile() == true) {
                    var newLocation = location + "/" + items[i].name;
                    fs.stat(newLocation, (err, item) => {
                        if (err) {
                        } else {
                            console.log(newLocation + ":" + item.size);
                        }
                    });
                } else if (items[i].isDirectory() == true) {
                    logSize(location + "/" + items[i].name);
                }
            }
        }
    });
}
logSize(__dirname);
