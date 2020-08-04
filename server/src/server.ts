import express from "express";

const APP_PORT = 3333;
const APP_SERVER = 'http://localhost';

const app = express();

app.use(express.json());

app.listen(APP_PORT, () => {
    console.log('App is running and listening on %s:%d', APP_SERVER, APP_PORT)
})