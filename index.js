module.exports = {
    book: {
        assets: "./book",
        js: [
            "plugin.js"
        ]
    },
    hooks: {
        "finish": function(){
            console.log("FINISH!");
        }
    }
}