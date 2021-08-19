const fs = require('fs')

const readstream = fs.createReadStream('./doc/blog2.txt', {encoding : 'utf-8'});
const writestream = fs.createWriteStream('./doc/blog3.txt');

// readstream.on('data', (chunk) => {
//     console.log('-------New Chunk-------');
//     console.log(chunk);
//     writestream.write('\n New Chunk \n');
//     writestream.write(chunk);
// })s


// piping
readstream.pipe(writestream);

