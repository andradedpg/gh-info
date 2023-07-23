
import * as dotenv from "dotenv";
dotenv.config();

import { LABEL_STARTER } from "./shared/constants";
import figlet = require('figlet')
console.log(figlet.textSync(LABEL_STARTER));

import cli from './cli';

cli.parse(process.argv);