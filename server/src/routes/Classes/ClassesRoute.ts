import express from "express";
import { ClassesController } from "../../controller";

const classesRoute = express.Router();
const { create, index } = new ClassesController();

classesRoute.get('/', index);
classesRoute.post('/', create);

export default classesRoute;
