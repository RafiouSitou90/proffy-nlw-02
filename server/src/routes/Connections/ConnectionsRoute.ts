import express from "express";
import { ConnectionsController } from "../../controller";

const connectionsRoute = express.Router();
const { create, index } = new ConnectionsController();

connectionsRoute.get('/', index);
connectionsRoute.post('/', create);

export default connectionsRoute;
