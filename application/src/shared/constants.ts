export const LABEL_STARTER = process.env.APP_LABEL_STARTER || "GITHUB INFO CLI";
export const VERSION = process.env.APP_VERSION || "0.0.1";
export const CLI_NAME = process.env.APP_CLI_NAME || "gh-info-cli";

export const GH_API_URL = "https://api.github.com";
export const POSTGRES_HOST = process.env.POSTGRES_HOST || "localhost";
// SECRETS
export const GH_API_TOKEN = process.env.APP_GH_API_TOKEN || "gh-token";
export const POSTGRES_DB = process.env.POSTGRES_DB || "POSTGRES_DB";
export const POSTGRES_PORT = Number(process.env.POSTGRES_PORT || 5432);
export const POSTGRES_USER = process.env.POSTGRES_USER || "POSTGRES_USER";
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || "EX_PASSWORD";

