import { writeFile, unlink } from "fs/promises";
// import { promisify } from "util";
// let writeFile = promisify(fs.writeFile);
// let unlink = promisify(fs.unlink);

let delay = (time) => new Promise((resolves) => setTimeout(resolves, time));
