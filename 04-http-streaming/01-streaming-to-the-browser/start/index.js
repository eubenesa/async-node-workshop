import { createReadStream } from "fs";
import { stat } from "fs/promises";
import http from "http";
import { promisify } from "util";

const fileName = "../../../assets/tahoe-snowpack.mp4";

http
  .createServer(async (req, res) => {
    const { size } = await stat(fileName);
    res.writeHead(200, {
      "Content-Length": size,
      "Content-Type": "video/mp4",
    });
    createReadStream(fileName).pipe(res);
  })
  .listen(3000, () => {
    console.log("server running at localhost:3000 !");
  });
