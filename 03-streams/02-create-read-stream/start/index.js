// "../../../assets/tahoe-snowpack.mp4"

import { createReadStream, createWriteStream } from "fs";

const readStream = createReadStream("../../../assets/tahoe-snowpack.mp4");
const writeStream = createWriteStream(
  "../../../assets/tahoe-snowpack-copy.mp4"
);

readStream.pipe(writeStream).on("error", console.error);

// readStream.on("data", (chunk) => {
//   // console.log("reading little chunk", chunk);
//   // console.log("size", chunk.length);
//   writeStream.write(chunk);
// });

// readStream.on("error", (error) => {
//   console.error("an error occured");
//   console.error(error);
// });

// readStream.on("end", () => {
//   // console.log("read stream finished");
//   writeStream.end();
// });
