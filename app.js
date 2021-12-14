// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("Welcome to our homepage");
//   res.end();
// });

// server.listen(5000);

const { describe } = require("yargs");
const yargs = require("yargs");

yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("body: " + argv.body);
  },
});

//create remove command

yargs.command({
  command: "remove",
  describe: "Removing note",
  handler: function () {
    console.log("removing note");
  },
});

//add, remove, read, list

// console.log(yargs.argv);
yargs.parse();
