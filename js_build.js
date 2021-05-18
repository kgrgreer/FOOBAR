var npRoot = __dirname + '/../';

require(npRoot + 'foam3/src/foam.js');
require(__dirname + '/Config.js');

var config  = foobar.Config.create();

function hello_world(userName) {
  // console.log('hello ' + userName);

  config.build = true;

  help();  

  // console.log(config);
}

function help() {
  console.log(foobar.Config.getAxioms().filter(p => p.help).map(p => p.help));
  // foam.__context__.classloader.load('foobar.Config').then(function(cls) {
  //   console.log(cls.create().cls_.getAxioms().map(p => p.help));
  // });
}


//create config obj here
var opts = {};

opts.alias = { name: 'n' };

var argv = require('minimist')(process.argv.slice(2), opts);

help();
// config.clean();
console.log(config.PROJECT_HOME);