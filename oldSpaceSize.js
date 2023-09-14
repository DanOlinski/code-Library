// node --max_old_space_size=10128; kill-port 8080; npm  start


// set --max-old-space-size=10128 src/index.js

// --max_old_space_size=512m install

//check memory available for VM
//if you type in the terminal: node --max-old-space-size=10128 jsTinkering.js it will reset the max memory amount for the executed file
//however in a express server if you want to use this command you'll have to place into the start key(in the .json file): "react-scripts --max_old_space_size=10128 start" or "./node_modules/.bin/nodemon -L express_server.js". the 1st option is for a react server. You can also add this code to a .env file
{const v8 = require('v8')
const heapSizeInBites = v8.getHeapStatistics().total_available_size
const heapSizeInMegaBites = ((v8.getHeapStatistics().total_available_size)/1024)/1024
const heapSizeInGigaBites = (((v8.getHeapStatistics().total_available_size)/1024)/1024)/1024
console.log(heapSizeInBites, 'bites')
console.log(heapSizeInMegaBites, 'Mega bites')
console.log(heapSizeInGigaBites, 'Giga bites')
}

