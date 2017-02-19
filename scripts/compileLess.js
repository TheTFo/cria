var fs = require('fs');
var less = require('less');

const lessOptions = {};

module.exports = function compileLess(file) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        }
        less.render(data, lessOptions)
            .then((output) => {
                var outfile = file.substring(0, file.length - 4) + 'css';
                fs.writeFile(outfile, output.css, { flag : 'w' }, (err) => {
                    if (err) throw err;
                });  
                // output.css = string of css
                // output.map = string of sourcemap
                // output.imports = array of string filenames of the imports referenced
            },
            (error) => {
            });
    });
}