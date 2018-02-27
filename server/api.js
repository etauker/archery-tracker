const express = require('express');
const fs = require('fs');
const path = require('path');
const sortBy = require('sort-array');
const papa = require("../node_modules/papaparse/papaparse.js");
const utils = require('./utils.js');
const router = express.Router();

var ctx = {};
var sourcePath = "./source";

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/members', (req, res) => {
    var members = getMembers();
    members.then(function(memberArray) {
        res.send(memberArray);
    });
});

router.get('/scores/:level/:name', (req, res) => {
    var members = getMembers();
    var paramName = addSpaces(req.params.name).toLowerCase();
    var paramLevel = req.params.level.toLowerCase();
    
    members.then(function(memberArray) {
        memberArray.forEach(function(member) {
            if (paramName == member.name.toLowerCase() && paramLevel == member.level.toLowerCase()) {
                getDirContent(sourcePath, member, callback);
            }
        });
    });
    
    function callback(data) {
        var backup = data;
        addCalculatedScores(backup).then(function(result) {
            backup = result;
            return backup;
        }).then(function(result) {
            result.splice(result.indexOf(null), 1);
            return result;
        }).then(function(result) {
            sortBy(result, 'info.timestamp');
            res.send(result);
        });        
    }
});

function getTimestamp(date) {
    
    var regex = RegExp("(\\d*)-(\\d*)-(\\d*)");
    var result = regex.exec(date);
    // console.log(event.info.date);
    // console.log(result);
    
    var yyyy = result[3];
    var mm = result[2];
    var dd = result[1];
    var dateString = "yyyy/mm/dd 00:00:00";
    dateString = dateString.replace("yyyy", yyyy);
    dateString = dateString.replace("mm", mm);
    dateString = dateString.replace("dd", dd);
    // console.log(dateString);
    var timestamp = Math.round(new Date(dateString).getTime()/1000);
    // console.log(event.info.timestamp);
    // console.log(timestamp);
    return timestamp;
}


// function sortEvents(events) {
//     // 
//     // var sortedArray ctx.events.map(function(val, ind, arr) {
//     // var lastRow = info.scores[info.scores.length-1];
//     // var lastCell = lastRow[lastRow.length-1];
//     // new Promise(function(resolve, reject) {
//     return new Promise(function(resolve, reject) {
// 
//         events.forEach(function(event, index, array) {
//             // event.timestamp = Math.round(new Date(event.date).getTime()/1000)]
// 
//             var regex = RegExp("(\\d*)-(\\d*)-(\\d*)");
//             var result = regex.exec(event.info.date);
//             // console.log(event.info.date);
//             // console.log(result);
// 
//             var yyyy = result[3];
//             var mm = result[2];
//             var dd = result[1];
//             var dateString = "yyyy/mm/dd 00:00:00";
//             dateString = dateString.replace("yyyy", yyyy);
//             dateString = dateString.replace("mm", mm);
//             dateString = dateString.replace("dd", dd);
//             // console.log(dateString);
//             event.info.timestamp = Math.round(new Date(dateString).getTime()/1000);
//             // console.log(event.info.timestamp);
//             console.log(events);
// 
//         });
//         sortBy(events, 'info.timestamp');
//         resolve(events);
//     });
// 
//     // });
//     // });
// }


function addCalculatedScores(events) {
    
    return new Promise(function(resolve, reject) {
        var end = 0;
        var running = 0;
        
        events.forEach(function(event, index, array) {
            
            if (event != null) {
                running = 0;
                event.scores.data.forEach(function(row, ind) {
                    
                    end = 0;
                    if (ind != 0) {
                        // console.log(row);
                        
                        row.forEach(function(cell, i) {
                            if (i < 6) {
                                end += parseInt(cell);
                                // console.log(end);
                            }
                        })
                        events[index].info['end_'+ind] = end;
                        running += parseInt(end);
                    }
                })
                events[index].info.total = running;
                // console.log(events[index].info);
            }
                
        });
        resolve(events);
    });
    // });
}
function getMembers() {
    var members = [];
    return new Promise (function(resolve, reject) {
        fs.readFile("./members.csv", 'utf8', function(err, contents) {
            var json = papa.parse(contents);
            json.data.forEach(function(mbr) {
                members.push({
                    name: mbr[0], 
                    level: mbr[1],
                    url: removeSpaces(mbr[0])
                })
            });
            resolve(members);
        });
    });
}
function removeSpaces(string) {
    return string.replace(" ", "_");
}
function addSpaces(string) {
    return string.replace("_", " ");
}
function getDirContent(location, member, callback) {
    location += "/" + member.name + "/";
    // var files = [];
    var events = [];
    var promises = [];
    var file = "";

    promises[0] = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, null);
    });
    
    fs.readdir(location, function(err, items) {
        for (var i=0; i<items.length; i++) {
            file = location+items[i];
            // console.log(file);
            
            var prom = readScoresFile(file, member);
            promises.push(prom);
            // .then(function(obj) {
            //     events.push(obj);
            // });
            
            // console.log(prom);
            // 
            // 
            // fs.readFile(file, 'utf8', function(err, contents) {
            //     var json = papa.parse(contents); 
            //     var eventInfo = parseInfo(file); 
            //     events[i] = {};
            //     events[i].archer = member.name;                  
            //     events[i].scoresheet = file;                  
            //     events[i].level = member.level;                  
            //     events[i].location = eventInfo.location;                  
            //     events[i].date = eventInfo.date;     
            //     // console.log(ctx);             
                // printSection(file, json, eventInfo);
            // });
        }
    });
    setTimeout(function () {
        return Promise.all(promises).then(function(values) {
            callback(values);
            // console.log(promises);
            // console.log(values);
        });//.then(function(data) {
            
        // });
        
    }, 1000);
    
}

function readScoresFile(file, member) {
    var obj = {};
    
    return new Promise (function(resolve, reject) {
        fs.readFile(file, 'utf8', function(err, contents) {
            var json = papa.parse(contents); 
            var eventInfo = parseInfo(file); 
            obj = {};
            obj.info = {};
            obj.info.archer = member.name;                  
            obj.info.scoresheet = file;                  
            obj.info.level = member.level;                  
            obj.info.location = eventInfo.location;                  
            obj.info.date = eventInfo.date;  
            obj.info.timestamp = getTimestamp(eventInfo.date);
            obj.scores = json; 
            resolve(obj);
            // console.log(obj);
        });
        
        // setTimeout(function () {
        // }, 100);
    });
}


function parseInfo(filename) {
    console.log(filename);
    
    var regex = RegExp(".*?/.*?/(.*?)/(.*?)\\s-\\s(.*?)\\s\\((.*)\\).*?\\.csv");
    var result = regex.exec(filename);
    // console.log(result);
    return {
        archer: result[1] ? result[1] : "",
        type: result[2] ? result[2] : "",
        location: result[3] ? result[3] : "",
        date: result[4] ? result[4] : ""
    };
}
function printSection(index) {
    // // console.log(ctx.events[index]);
    // var info = ctx.events[index].info;
    // var json = ctx.events[index].scores;
    // // type: eventInfo.type,
    // // date: eventInfo.date,
    // // location: eventInfo.location,
    // // archer: name,
    // // level: level,
    // // scoresheet: file
    // // 
    // 
    // 
    // ctx.res.write("<h5>Type: "+info.type+"</h5>");
    // ctx.res.write("<h5>Date: "+info.date+"</h5>");
    // ctx.res.write("<h5>Location: "+info.location+"</h5>");
    // 
    // // Print the table
    // ctx.res.write('<table class="table">');
    // var runningTotal = 0;
    // json.data.forEach(function(row, ind, arr) {
    //     // console.log("Row: " + row);
    //     if (ind>0) {
    //         if (ind==1) { ctx.res.write('<tbody>'); }
    //         var endTotal = 0;
    //         ctx.res.write('<tr>');
    //         row.forEach(function(cell, index, array) {
    //             if (index<6) {
    //                 ctx.res.write('<td>'+cell+'</td>');
    //                 endTotal += parseInt(cell);
    //             }
    //         });
    //         runningTotal += parseInt(endTotal);
    //         ctx.res.write("<td>"+endTotal+"</td>");
    //         ctx.res.write("<td>"+runningTotal+"</td>");
    //         ctx.res.write('</tr>');
    //     }
    //     else {
    //         ctx.res.write('<thead><tr>');
    //         row.forEach(function(cell, index, array) {
    //             if (index<8) {
    //                 ctx.res.write('<th scope="col">'+cell+'</th>');
    //             }
    //         });
    //         ctx.res.write('</tr></thead>');
    //     }
    // });
    // ctx.res.write('</tbody></table>');
    // res.end();
}










module.exports = router;





















//