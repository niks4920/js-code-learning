//IIFE - Immediate Invoked function expression - when we want to execute function immediately after we have written it

// syntax - ()()   (first is function and second is execution)
//IIFE function is invoked but it doesn't know when to stop the context and to resolve that issue we need to add semicolon (;) at end of func execution
//named IIFE
(function chai() {
    console.log("Db_connected")
})();
//unnamed IIFE
(() => {
    console.log("db connected new")
})();
// IIFE function with argument
((name) => {
    console.log(`DB Connected for ${name}`)
})("Niketa")