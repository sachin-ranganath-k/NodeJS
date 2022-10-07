function demo(name){
    console.log("This is demo app "+name)
}
// console.log(window);
 demo("Sachin");


var msg="";
console.log(global.msg)  //undefined (in node)   Variables declared are not "global" objects


console.log(module)
//Output
/*
    Module {
  id: '.',
  path: 'E:\\nodejs\\first-node-app',
  exports: {},
  parent: null,
  filename: 'E:\\nodejs\\first-node-app\\app.js',
  loaded: false,
  children: [],
  paths: [
    'E:\\nodejs\\first-node-app\\node_modules',
    'E:\\nodejs\\node_modules',
    'E:\\node_modules'
  ]
}
*/
