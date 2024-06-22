import fetch from "isomorphic-fetch";

fetch("http://pet-library.moonhighway.com/api/pets")
  .then((res) => res.json())
  .then(console.log);
