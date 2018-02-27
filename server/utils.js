var fs = require('fs');
var papa = require("../../node_modules/papaparse/papaparse.js");


(function() {
    // 
    // var ctx = {};
    // 
    // // Point static path to dist
    // app.use(express.static(path.join(__dirname, 'dist')));
    // 
    // // Set our api routes
    // app.use('/api', api);
    // 
    // // create an http server to handle requests and response
    // app.get('/', function(req, res) {
    // 
    //     // Catch all other routes and return the index file
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'dist/index.html'));
    // });
    // 
    // /**
    //  * Get port from environment and store in Express.
    //  */
    // // const port = process.env.PORT || '3000';
    // // app.set('port', port);
    // 
    // 
    // /**
    // * Create HTTP server.
    // */
    // // const server = http.createServer(app);
    // 
    // /**
    // * Listen on provided port, on all network interfaces.
    // */
    // // server.listen(port, () => console.log(`API running on localhost:${port}`));
    // 
    // 
    // 
    // 
    // // http.createServer(function (req, res) {
    // 
    //     // Add the head content
    //     res.write('<head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></head>');
    //     res.write('<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>');
    //     res.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>');
    //     res.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>');
    // 
    //     var path = "./source";
    //     var filename = "Tautvydas/Kingfisher (09-10-2017).csv";
    //     var members = getMembers();
    //     ctx.event = [];
    //     ctx.res = res;
    // 
    //     members.then(function(memberArray) {
    //         memberArray.forEach(function(member) {
    //             // console.log(member);
    //             // getDirContent(path, member);
    //             var name = removeSpaces(member.name);
    //             res.write('<a href="./member?name='+name+'&level='+member.level+'">'+member.name+'</a><br>');
    //         });
    //         ctx.res.end();
    //     });
    // 
    // }).listen(8080);
    // console.log('Server running on port 8080.');
    // 
    // function navigate(newUrl) {
    // 
    // }
    // 
    // function endWrite() {
    // }
    // 
    // app.get('/member', function(req, res) {
    // // http.createServer(function (req, res) {
    // 
    //     // Add the head content
    //     res.write('<head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></head>');
    //     res.write('<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>');
    //     res.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>');
    //     res.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>');
    // 
    //     var name = req.query.name; //TODO: Add spaces back in
    //     var level = req.query.level;
    //     ctx.res = res;
    //     ctx.events = [];
    // 
    // 
    //     // var type = req.query.type;
    //     ctx.res.write("<h1>Archer: "+name+"</h1>");
    //     ctx.res.write("<h1>Level: "+level+"</h1>");
    //     ctx.res.write("<hr>");
    // 
    //     var path = "./source/"+name+"/";
    //     var files = getFiles(path);
    //     var events = [];
    // 
    //     files.then(function(fileArray) {
    //         fileArray.forEach(function(file) {
    //             // console.log(file);
    //             var eventInfo = parseInfo(file);
    //             events.push({
    //                 type: eventInfo.type,
    //                 date: eventInfo.date,
    //                 location: eventInfo.location,
    //                 archer: name,
    //                 level: level,
    //                 scoresheet: file
    //             });
    //             // // getDirContent(path, member);
    //             // var name = removeSpaces(member.name);
    //             // res.write('<a href="./member/'+name+'">'+member.name+'</a>');
    //         });
    //         // return events;
    //     }).then(function() {
    //     //     var ctx = args.ctx;
    //     //     var evt = args.events;
    //     //     ctx.scores = [];
    //     //     var promises = events.map(function(event, index, array) {
    //     // 
    //     //         var json = getFileContent(event.scoresheet);
    //     //         return json.then(function(data) { return data; });
    //     //         // console.log(prom);
    //     //         // return prom.then(function(json) {
    //     //         // });
    //     // 
    //     //         // outerScores[index] = scores[index];
    //     //     });
    //     // 
    //     //     Promise.all(promises).then(function(value) {
    //     //         console.log(value);
    //     //         ctx.scores = value.map(function(val) { return val; });
    //     //     });
    //     //     // console.log(promises);
    //     //     console.log(ctx);
    //     events.forEach(function(event, index, array) {
    // 
    //         fs.readFile(event.scoresheet, 'utf8', function(err, contents) {
    //             var json = papa.parse(contents);
    //             assignDataToEvents(json, event, index);
    //             // printSection(index);
    //         });
    //     });
    // 
    //     setTimeout(function () {
    //         console.log("Timeout ended");
    //         calculateEndScores().then(function(data) {
    //             console.log("End scores calculated");
    //             // calculateRunningTotals().then(function() {
    //                 sortEvents(data).then(function(sortedEvents) {
    // 
    //                     ctx.events.forEach(function(value, index) {
    //                         printSection(index);
    //                         console.log(ctx.events[0].scores);
    //                         endRes();
    // 
    // 
    //                     // }).then(function() {
    // 
    //                     });
    // 
    //                 });
    // 
    //             // })
    //         })
    //     }, 200);
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    //     // console.log(events);
    // 
    //     });
    // 
    // });
    // 
    // function removeSpaces(string) {
    //     return string.replace(" ", "_");
    // }
    // 
    // function assignDataToEvents(json, info, i) {
    // 
    //     var end = 0;
    //     ctx.events[i] = {};
    //     ctx.events[i].info = info;
    //     ctx.events[i].scores = json;
    // 
    // 
    // 
    // 
    //     // json.data.forEach(function(value, index) {
    //     //     // console.log(value);
    //     //     ctx.events[i].scores = [];
    //     //     end = parseInt(getEndTotal(value));
    //     //     // console.log(ctx.end);
    //     //     // console.log(ctx);
    //     //     // ctx.running = parseInt(ctx.running) + parseInt(ctx.end);
    //     //     // console.log(typeof ctx.running);
    //     // 
    //     //     // Ignore header rows
    //     //     if (index > 0) {
    //     // 
    //     //         ctx.events[i].scores[index] = { 
    //     //             "Arrow 1": value[0],
    //     //             "Arrow 2": value[1],
    //     //             "Arrow 3": value[2],
    //     //             "Arrow 4": value[3],
    //     //             "Arrow 5": value[4],
    //     //             "Arrow 6": value[5]
    //     //             // endTotal: ctx.end,
    //     //             // runningTotal: ctx.running
    //     //         };    
    //     //     }
    //     // });
    //     // 
    // 
    // 
    // 
    //     // console.log(ctx.events[i]);
    // }
    // // function getRunningTotal(index, value) {
    // //     if (index == 1) { return parseInt(0); }
    // //     else { 
    // //         return ctx.events[i].scores[index-1].runningTotal + getEndTotal(value);
    // //     }
    // // }
    // 
    // function getEndTotal(values) {
    //     return  parseInt(values[0])+parseInt(values[1])+parseInt(values[2])+parseInt(values[3])+parseInt(values[4])+parseInt(values[5]);
    // }
    // 
    // function endRes(values) {
    //     setTimeout(function() {
    //         ctx.res.end();
    //     }, 500);
    // }
    // 
    // function sortEvents(array) {
    //     // 
    //     // var sortedArray ctx.events.map(function(val, ind, arr) {
    //     // var lastRow = info.scores[info.scores.length-1];
    //     // var lastCell = lastRow[lastRow.length-1];
    //     // new Promise(function(resolve, reject) {
    //     return new Promise(function(resolve, reject) {
    // 
    //         ctx.events.forEach(function(event, index, array) {
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
    // 
    //         })
    //         sortBy(ctx.events, 'info.timestamp');
    //         resolve(ctx.events);
    //     });
    // 
    //     // });
    //     // });
    // }
    // function calculateEndScores() {
    // 
    //     return new Promise(function(resolve, reject) {
    //         var end = 0;
    //         var running = 0;
    //         //TODO
    //         ctx.events.forEach(function(event, index, array) {
    // 
    //             running = 0;
    //             event.scores.data.forEach(function(row, ind) {
    // 
    //                 end = 0;
    //                 if (ind != 0) {
    //                     // console.log(row);
    // 
    //                     row.forEach(function(cell, i) {
    //                         if (i < 6) {
    //                             end += parseInt(cell);
    //                             // console.log(end);
    //                         }
    //                     })
    //                     ctx.events[index].info['end_'+ind] = end;
    //                     running += parseInt(end);
    //                 }
    //             })
    //             ctx.events[index].info.total = running;
    //             // console.log(ctx.events[index].info);
    // 
    //         });
    //         resolve(ctx.events);
    //     });
    //     // });
    // }
    // function calculateRunningTotals() {
    // 
    //     return new Promise(function(resolve, reject) {
    //         //TODO
    //     });
    //     // });
    // }
    // 
    // 
    // 
    // 
    //     // ctx.events.sort(dynamicSort("info/"));
    //     // 
    //     // function dynamicSort(property) {
    //     //     var sortOrder = 1;
    //     //     if(property[0] === "-") {
    //     //         sortOrder = -1;
    //     //         property = property.substr(1);
    //     //     }
    //     //     return function (a,b) {
    //     //         var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    //     //         return result * sortOrder;
    //     //     }
    //     // }
    // 
    // 
    // function printSection(index) {
    //     // console.log(ctx.events[index]);
    //     var info = ctx.events[index].info;
    //     var json = ctx.events[index].scores;
    //     // type: eventInfo.type,
    //     // date: eventInfo.date,
    //     // location: eventInfo.location,
    //     // archer: name,
    //     // level: level,
    //     // scoresheet: file
    //     // 
    // 
    // 
    //     ctx.res.write("<h5>Type: "+info.type+"</h5>");
    //     ctx.res.write("<h5>Date: "+info.date+"</h5>");
    //     ctx.res.write("<h5>Location: "+info.location+"</h5>");
    // 
    //     // Print the table
    //     ctx.res.write('<table class="table">');
    //     var runningTotal = 0;
    //     json.data.forEach(function(row, ind, arr) {
    //         // console.log("Row: " + row);
    //         if (ind>0) {
    //             if (ind==1) { ctx.res.write('<tbody>'); }
    //             var endTotal = 0;
    //             ctx.res.write('<tr>');
    //             row.forEach(function(cell, index, array) {
    //                 if (index<6) {
    //                     ctx.res.write('<td>'+cell+'</td>');
    //                     endTotal += parseInt(cell);
    //                 }
    //             });
    //             runningTotal += parseInt(endTotal);
    //             ctx.res.write("<td>"+endTotal+"</td>");
    //             ctx.res.write("<td>"+runningTotal+"</td>");
    //             ctx.res.write('</tr>');
    //         }
    //         else {
    //             ctx.res.write('<thead><tr>');
    //             row.forEach(function(cell, index, array) {
    //                 if (index<8) {
    //                     ctx.res.write('<th scope="col">'+cell+'</th>');
    //                 }
    //             });
    //             ctx.res.write('</tr></thead>');
    //         }
    //     });
    //     ctx.res.write('</tbody></table>');
    //     // res.end();
    // }
    // 
    // function parseInfo(filename) {
    //     console.log(filename);
    // 
    //     var regex = RegExp(".*?/.*?/(.*?)/(.*?)\\s-\\s(.*?)\\s\\((.*)\\).*?\\.csv");
    //     var result = regex.exec(filename);
    //     // console.log(result);
    //     return {
    //         archer: result[1] ? result[1] : "",
    //         type: result[2] ? result[2] : "",
    //         location: result[3] ? result[3] : "",
    //         date: result[4] ? result[4] : ""
    //     };
    // }
    // 
    // function isFile(name) {
    //     // if (name.includes(".")) { console.log("is file"); }
    //     // else { console.log("is directory"); }
    //     return name.includes(".");
    // }
    // 
    // function getDirContent(location, member) {
    //     location += "/" + member.name + "/";
    //     var files = [];
    //     var file = "";
    // 
    //     fs.readdir(location, function(err, items) {
    //         for (var i=0; i<items.length; i++) {
    //             file = location+items[i];
    //             // console.log(file);
    // 
    //             fs.readFile(file, 'utf8', function(err, contents) {
    //                 var json = papa.parse(contents); 
    //                 var eventInfo = parseInfo(file); 
    //                 ctx.event[i] = {};
    //                 ctx.event[i].archer = member.name;                  
    //                 ctx.event[i].scoresheet = file;                  
    //                 ctx.event[i].level = member.level;                  
    //                 ctx.event[i].location = eventInfo.location;                  
    //                 ctx.event[i].date = eventInfo.date;     
    //                 // console.log(ctx);             
    //                 printSection(file, json, eventInfo);
    //             });
    //         }
    //     });
    // 
    // }
    
    function getMembers() {
        var members = [];
    
        return new Promise (function(resolve, reject) {
            
            fs.readFile("../members.csv", 'utf8', function(err, contents) {
                var json = papa.parse(contents);
                json.data.forEach(function(mbr) {
                    members.push({
                        name: mbr[0], 
                        level: mbr[1]
                    })
                });
                resolve(members);
            });
        });
    }
    
    // function getFiles(path) {
    //     var files = [];
    // 
    //     return new Promise (function(resolve, reject) {
    // 
    //         // fs.readFile("./members.csv", 'utf8', function(err, contents) {
    //         //     var json = papa.parse(contents);
    //         //     json.data.forEach(function(mbr) {
    //         //         members.push({
    //         //             name: mbr[0], 
    //         //             level: mbr[1]
    //         //         })
    //         //     });
    //         //     resolve(members);
    //         // });
    // 
    //         fs.readdir(path, function(err, items) {
    //             for (var i=0; i<items.length; i++) {
    //                 file = path+items[i];
    //                 // console.log(file);
    //                 files.push(file);
    // 
    //                 // fs.readFile(file, 'utf8', function(err, contents) {
    //                 //     var json = papa.parse(contents); 
    //                 //     var eventInfo = parseInfo(file); 
    //                 //     ctx.event[i] = {};
    //                 //     ctx.event[i].archer = member.name;                  
    //                 //     ctx.event[i].scoresheet = file;                  
    //                 //     ctx.event[i].level = member.level;                  
    //                 //     ctx.event[i].location = eventInfo.location;                  
    //                 //     ctx.event[i].date = eventInfo.date;     
    //                 //     console.log(ctx);             
    //                 //     printSection(file, json, eventInfo);
    //                 // });
    //             }
    //             resolve(files);
    //         });
    //     });
    // }
    // 
    // function getFileContent(file) {
    //     // console.log(file);
    //     return new Promise (function(resolve, reject) {
    // 
    //         fs.readFile(file, 'utf8', function(err, contents) {
    //             var json = papa.parse(contents);
    //             // console.log(json);
    //             resolve(json);
    //         });
    //     });
    // }
    // 
    // 
    // function parseScores(json) {
    //     //TODO
    //     return {};
    //     // // console.log(file);
    //     // return new Promise (function(resolve, reject) {
    //     // 
    //     //     fs.readFile(file, 'utf8', function(err, contents) {
    //     //         var json = papa.parse(contents);
    //     //         // console.log(json);
    //     //         resolve(json);
    //     //     });
    //     // });
    // }


})();