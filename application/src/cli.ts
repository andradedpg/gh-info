import { VERSION, CLI_NAME } from "./shared/constants";

const { Command } = require("commander");
const cli = new Command();

cli
  .version(VERSION)
  .name(CLI_NAME)
  .description("CLI for fetching GitHub user info")
  .option("-l, --ls", "List users from database")
  .option("-u, --username <value>", "Fetch user info by username")
  .parse(process.argv);  

export default cli;