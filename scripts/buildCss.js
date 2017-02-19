var glob = require("glob")
var path = require('path');
var compileLess = require('./compileLess');

const globOptions = {
    cwd: path.join(process.cwd(), "src"),
    absolute: true
};

glob("**/*.less", globOptions, (er, files) => {
    if (files && files.length) {
        files.forEach(f => compileLess(f));
    }
});

