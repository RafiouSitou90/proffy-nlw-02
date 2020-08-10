import express from "express";
import cors from "cors"

import {ClassesRoute, ConnectionsRoute} from "./routes";

const APP_PORT = 3333;
const APP_SERVER = '192.168.0.10';

const app = express();

app.use(cors())
app.use(express.json());

app.use('/classes', ClassesRoute);
app.use('/connections', ConnectionsRoute);

app.listen(APP_PORT, () => {
    console.log('App is running and listening on %s:%d', APP_SERVER, APP_PORT)
})