//#region Imports

const { exec } = require("child_process");
            

//#region Runfile
    var scope = "top";

function runfile(fileArray) {
    const lines = new Array(fileArray);

    for (let i = 0; i < lines.length; i++) {
        const text = new String(lines[i]);
        if (scope == "top") {
            const command = text.split(" ")[0];

            switch (command) {
                case "ADD":
                    add(text.split(" "));
                    break;
            
                default:
                    break;
            }
        }
    }
}

//#region Add

function add(text) {
    if (text[1] == "automation") {
        if (text[3] === "exec") {
            
        }
    }
}
//#region need work on exec                            THIS IS WHERE I AM UP TO
function exec() {}

runfile(["ADD automation AS exec"])

//#region Export