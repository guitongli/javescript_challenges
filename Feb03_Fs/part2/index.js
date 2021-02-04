const fs = require("fs");

// var property;
var obj = mapSizes(__dirname);
console.log(obj);
fs.writeFileSync("files.json", JSON.stringify(obj, null, 4));

function mapSizes(location) {
    var map = {};
    var items = fs.readdirSync(location, { withFileTypes: true });
    for (var i = 0; i < items.length; i++) {
        var newLocation = location + "/" + items[i].name;
        if (items[i].isDirectory() == true) {
            map[items[i].name] = mapSizes(newLocation);
        } else if (items[i].isFile() == true) {
            const stat = fs.statSync(newLocation);

            map[items[i].name] = stat.size;
        }
    }
    return map;
}

// var items2 = fs.readdirSync(location + "/" + items[i].name, {
//         withFileTypes: true,
//     });
//     newLocation = location + "/" + items[i].name + "/" + items2[k].name;
//     for (var k = 0; k < items2.length; k++) {
//         map[items[i]][items2[k].name] = fs.statSync(newLocation).size;
//     }
//     console.log(items2);
// }
// }
//         if (items[i].isFile() == true) {
// }
//         } else if (items[i].isDirectory() == true) {

//             mapSizes(location + "/" + items[i].name);
//     //        }
//     //     }
//     console.log(map);
//     const obj = JSON.stringify(map, null, 4);
//     fs.writeFileSync("files.json", obj);
// }

// mapSizes(__dirname);
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
// const fs = require("fs");

// mapSizes(__dirname);
// function mapSizes(path) {
//     const files = fs.readdirSync(path, { withFileTypes: true });
//     const obj = {};
//     for (let i = 0; i < files.length; i++) {
//         const nextPath = `${path}/${files[i].name}`;
//         if (files[i].isDirectory()) {
//             obj[files[i].name] = mapSizes(nextPath);
//         }
//         if (files[i].isFile()) {
//             const { size } = fs.statSync(nextPath);
//             obj[files[i].name] = size;
//         }
//     }
//     console.log(obj);
//     // return obj;
// }
