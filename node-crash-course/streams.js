const fs = require('fs')

const readStream = fs.createReadStream('./docs/stuff.txt', {encoding: 'utf8'});
var sum = 0;
const writeStream = fs.createWriteStream('./docs/stuff2.txt');

/*
readStream.on('data', (chunk)=>{
console.log('----NEW CHUNK------');
console.log(chunk.toString().substring(12,13));
writeStream.write('----NEW CHUNK------');
writeStream.write(chunk.substring(12,13))
})


*/
readStream.pipe(writeStream);



/*
k= ''
for(var i = 0; i < 999999; i++){
    k += `hello world ${i} \n`
}

fs.writeFile('./docs/stuff.txt', k,()=>{
    console.log('written')
    //writing to file is fast, so the asynchronous function for reading ends up logging  after the file has changed
    
    })

    made hello world k for k 0-999999 in stuff.txt
    */