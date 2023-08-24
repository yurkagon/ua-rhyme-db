const path = require("path");
const fs = require("fs-extra");

const songFolderPath = "../database/lazy/songs";
const destinationFolderPath = "../database/bundled/song_list";

const files = fs.readdirSync(path.resolve(__dirname, songFolderPath));
const sortedFiles = files.sort();
const fileList = sortedFiles.map((el) => el.trim()).join("\n");

fs.writeFileSync(path.resolve(__dirname, destinationFolderPath), fileList);
