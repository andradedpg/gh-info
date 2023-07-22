
import * as dotenv from "dotenv";
dotenv.config();

import { LABEL_STARTER } from "./shared/constants";
import figlet = require('figlet')
console.log(figlet.textSync(LABEL_STARTER));

import cli from './cli';
import { getOrCreateUser, listLocalUsers } from "./functions/users";
const options = cli.opts();

if (options.username) getOrCreateUser(options.username);
if (options.ls) listLocalUsers();