const fileSystem=require("fs");

//Should use asynchronous methods


//Synchronous
//readdirSync() is a Synchronous method which returns ARRAY files and folders from current directory
const showFilesInCurrentFolderSync=fileSystem.readdirSync('./');
console.log(showFilesInCurrentFolderSync);

//Asynchronous
//Reads the contents of a directory. The callback gets two arguments (err, files) 
//where files is an array of the names of the files in the directory excluding '.' and '..'.

fileSystem.readdir('.$', function(error, files){
    error ? console.log('Error..',error) : console.log('Result..',files)
})
