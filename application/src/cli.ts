import { VERSION, CLI_NAME } from "./shared/constants";

import { Command } from "commander";
const cli = new Command();

cli
  .version(VERSION)
  .name(CLI_NAME)
  .description("CLI for fetching GitHub user info")
  .option("-l, --ls", "List users from database")
  .option("-u, --username <value>", "Fetch user info by username - \
    from GitHub API and store it in database")
  .parse(process.argv);  

export default cli;