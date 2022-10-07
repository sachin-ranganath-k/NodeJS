-- In node we don't have window document objects.
     Instead we have global objects
     Eg: global.console.log(), global.setTimeout() etc.. We use shorthand
     Example is in app.js
     Variables declared are not "global" objects


--Module
    -- Every file in a node application is a Module
    -- Variables and functions declared in that are scoped to that file
    -- If the Variables and functions to be used in other module, we need to make it public explicitly
    -- Every mode application should have atleast one module/file i.e., " Main Module"


-- Module Wrapper Function
Node.js will wrap a module's code with a wrapper function before it is executed. 

Code:
(function(exports, require, module, __filename, __dirname) {
   // Module code 
});
The variables and functions in the node.js are private to the module that has it. 
The variables and functions inside the module are private and not visible to the outside. 
The variables and functions are made private in node.js using the node.js module wrapper function.


-- Path Module
     