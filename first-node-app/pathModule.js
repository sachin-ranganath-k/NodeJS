var path= require('path')

//Need to parse path
var pathObject=path.parse(__filename)


console.log(pathObject)
//****** Output *****
// {
//     root: 'E:\\',
//     dir: 'E:\\nodejs\\first-node-app',
//     base: 'pathModule.js',
//     ext: '.js',
//     name: 'pathModule'
//   }