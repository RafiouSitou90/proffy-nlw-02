import Knex from "knex";

const knexConfig = require("../../../knexfile");

const appConfig = knexConfig.development;
const DBConnection = Knex(appConfig);

export default DBConnection;