import { VERSION, CLI_NAME } from "./shared/constants";

import { Command } from "commander";
const cli = new Command();

import { getOrCreateUser, listLocalUsers } from "./functions/users";

cli
  .version(VERSION)
  .name(CLI_NAME)
  .description("CLI for fetching GitHub user info and storing it \
    in local database");

cli
  .command("user")
  .description("Fetch user info from GitHub API and store it in database")
  .option("-l, --ls", "List users from database")
  .option("-u, --username <value>", "Fetch user info by username - \
    from GitHub API and store it in database")
  .action((options) => {
    options.ls && listLocalUsers(); 
    options.username && getOrCreateUser(options.username);
  });  

export default cli;