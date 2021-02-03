const fs = require("fs");
var map = {};
var property;
function mapSizes(location) {
    var items = fs.readdirSync(location, { withFileTypes: true });
    for (var i = 0; i < items.length; i++) {
        // var map = {};
        if (items[i].isFile() == true) {
            const name = items[i].name;
            var newLocation = location + "/" + items[i].name;
            const stat = fs.statSync(newLocation);

            map[name] = stat.size;
        } else if (items[i].isDirectory() == true) {
            
            map[items[i]]
        //     var items2 = fs.readdirSync(location + "/" + items[i].name, {
        //         withFileTypes: true,
        //     });
        //     newLocation = location + "/" + items[i].name + "/" + items2[k].name;
        //     for (var k = 0; k < items2.length; k++) {
        //         map[items[i]][items2[k].name] = fs.statSync(newLocation).size;
        //     }
        //     console.log(items2);
        // }
    }
    //         if (items[i].isFile() == true) {
    // }
    //         } else if (items[i].isDirectory() == true) {

    //             mapSizes(location + "/" + items[i].name);
    //        }
    //     }
   const obj = JSON.stringify(map)
   fs.writeFileSync(files.json,obj)
}

mapSizes(__dirname);
// function mapSizes(location) {
//     fs.readdir(location, { withFileTypes: true }, function (err, items) {
//         console.log(items)
//     })
// if (err) {
//         console.log(err);
//     } else {
//         console.log(items);
// for (var i = 0; i < items.length; i++) {
//     if (items[i].isFile() == true) {
//         console.log(items);

//
//     } else if (items[i].isDirectory() == true) {
//         mapSizes(location + "/" + items[i].name);
//     }
// }
//         }
//     });
// }
