const fs = require("node:fs");
//fs extends EventEmitter Class

//(file, options)
const readableStream  = fs.createReadStream("./file.txt",{
    encoding:"utf-8",
    highWaterMark:2,
});

//(file,optios)
const writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data",(chunk)=>{
    console.log(chunk);
    writableStream.write(chunk);
})
