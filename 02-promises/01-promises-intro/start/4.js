// import { promisify } from "util";
// import fs from "fs";
import { writeFile } from "fs/promises";

// const writeFile = promisify(fs.writeFile);

writeFile("sample.txt", "this is a sample")
  .then(() => console.log("file successfully created"))
  .catch(console.error);
