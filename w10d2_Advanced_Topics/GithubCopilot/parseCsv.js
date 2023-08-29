// read CSV file and parse it into JSON
// Usage: node parseCsv.js <csv file> <output file>

var fs = require('fs');
var csv = require('csv');
var csvFile = process.argv[2];
var outputFile = process.argv[3];

var parser = csv.parse({delimiter: ','}, function(err, data){
  var result = [];
  var headers = data[0];
  for(var i=1; i<data.length; i++){
    var obj = {};
    for(var j=0; j<data[i].length; j++){
      obj[headers[j]] = data[i][j];
    }
    result.push(obj);
  }
  fs.writeFile(outputFile, JSON.stringify(result), function(err){
    if(err) throw err;
    console.log('file saved');
  });
}
);

fs.createReadStream(csvFile).pipe(parser);
