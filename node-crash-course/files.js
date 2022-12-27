const fs = require('fs');
console.log(__dirname);
console.group(__filename);
fs.readFile('global.js',(err,data)=>{
if (err){
    console.log(err);
}
console.log(data.toString());

})
console.log("skipping the slow functions")
fs.readFile('./docs/stuff.txt',(err,data)=>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
    
    })


fs.writeFile('./docs/stuff.txt', 'hello world',()=>{
console.log('written')
//writing to file is fast, so the asynchronous function for reading ends up logging  after the file has changed

})
/*
if(!fs.existsSync('./assests')){
fs.mkdir('./assets',(err)=>{
    if (err){
        console.log(err);
        console.log('folder created')
    }
})} else {
    fs.rmdir('./assets',(err)=>{if(err){
        console.log(err);
    }
console.log('folder deleted');
})
}
*/
if (fs.existsSync('./docs/stuff.txt')){
    fs.unlink('./docs/stuff.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })



}