const { Command } = require("commander");
const figlet = require("figlet");

const program = new Command();

console.log(figlet.textSync("GH INFO"));

program
  .version("0.0.1")
  .description("CLI for fetching GitHub user info")
  .option("-l, --ls", "List users from database")
  .option("-u, --username <value>", "Fetch user info by username")
  .parse(process.argv);

const options = program.opts();