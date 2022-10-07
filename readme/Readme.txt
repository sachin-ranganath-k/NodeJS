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

