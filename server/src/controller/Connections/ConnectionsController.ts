import { Request, Response } from "express";
import {DBConnection} from "../../config";

class ConnectionsController {

    // @ts-ignore
    async index (request: Request, response: Response) {
        const totalConnections = await DBConnection.table('tab_connections').count('* as total');

        // @ts-ignore
        const { total } = totalConnections[0];

        return response.status(200).send({ total });
    };

    async create (request: Request, response: Response) {
        const { user_id } = request.body;

        const trx = await DBConnection.transaction();

        await trx.table('tab_connections').insert({ user_id });

        await trx.commit();

        if (!trx.isCompleted()) {
            await trx.rollback();

            return response.status(400).json({
                status: 400,
                statusText: 'Bad request',
                message: 'Something is wrong in your request'
            })
        }

        return response.status(201).send();
    };
}

export default ConnectionsController