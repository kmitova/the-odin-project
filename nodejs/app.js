console.log("123");

const axios = require("axios");
const fs = require("fs");

axios
  .get("https://restcountries.com/v3.1/name/japan")
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
    // let content = res.data;
    // let jsonContent = JSON.stringify(content);
    // fs.writeFile("japan.json", jsonContent, "utf-8", (err) => {
    //   if (err) {
    //     console.log("An error occures whil writing the file.");
    //     return console.log(err);
    //   }
    //   console.log("JSON file has been saved.");
    // });
  })
  .catch((error) => {
    console.error(error);
  });
