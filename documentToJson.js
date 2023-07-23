// const fs = require("fs");
import fs from "fs";

const readFileName = "input.txt"; // Replace 'input.txt' with the name of your input file
const outputFileName = "output.json"; // Replace 'output.json' with the desired output JSON file name
const propertyName = "textData"; // Specify the property name where you want to store the text

fs.readFile(readFileName, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const jsonData = {
    [propertyName]: data.trim(),
  };

  const jsonString = JSON.stringify(jsonData, null, 2); // Convert JSON data to string with indentation

  fs.writeFile(outputFileName, jsonString, "utf8", (err) => {
    if (err) {
      console.error("Error writing to the output file:", err);
      return;
    }

    console.log(
      `Data from "${readFileName}" has been written to "${outputFileName}" as JSON.`
    );
  });

  fs.readFile(outputFileName, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    try {
      const jsonData = JSON.parse(data);

      if (jsonData && typeof jsonData === "object") {
        const textData = jsonData[propertyName];

        if (textData) {
          const totalCount = textData.length;

          if (textData.length > 20480) {
            jsonData[propertyName] = textData.substring(0, 20480);
            console.log(`Text trimmed to ${20480} characters.`);
          } else {
            console.log(`Text contains ${textData.length} characters.`);
          }

          console.log(
            `Total count of characters in "${propertyName}" property: ${totalCount}`
          );
        } else {
          console.error(`Property "${propertyName}" not found in the JSON.`);
        }
      } else {
        console.error("Invalid JSON data or JSON data is not an object.");
      }
    } catch (error) {
      console.error("Error parsing the JSON:", error);
    }
  });
  //   console.log("The total count of the output string is this ");
});
