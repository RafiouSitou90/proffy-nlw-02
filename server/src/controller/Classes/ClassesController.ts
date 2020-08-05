import { Request, Response } from "express";
import {DBConnection} from "../../config";
import ConvertHourToMinutes from "../../utils";

interface ScheduleItem {
    week_day: Number;
    from: string;
    to: string;
}

class ClassesController {
    async index (request: Request, response: Response) {
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if (!week_day || !subject || !time) {
            return response.status(400).json({
                status: 400,
                statusText: 'Bad request',
                message: 'Missing filters to search classes.'
            })
        }

        const timeInMinutes = ConvertHourToMinutes(time);

        const classes = await DBConnection.table('tab_classes')
            .whereExists(function () {
                this.select('tab_class_schedules.*')
                    .from('tab_class_schedules')
                    .whereRaw('`tab_class_schedules`.`class_id` = `tab_classes`.`id`')
                    .whereRaw('`tab_class_schedules`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`tab_class_schedules`.`from` <= ??', [timeInMinutes])
                    .whereRaw('`tab_class_schedules`.`to` >= ??', [timeInMinutes])
            })
            .where('tab_classes.subject', '=', subject)
            .join('tab_users', 'tab_classes.user_id', '=', 'tab_users.id')
            .select(['tab_classes.*', 'tab_users.*'])
        ;

        return response.status(200).send({classes});
    }

    async create (request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        try {
            const trx = await DBConnection.transaction();

            const user = await trx.table('tab_users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });

            const user_id = user[0];

            const classes = await trx.table('tab_classes').insert({
                subject,
                cost,
                user_id
            });

            const class_id = classes[0];

            const classSchedules = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    week_day: scheduleItem.week_day,
                    from: ConvertHourToMinutes(scheduleItem.from),
                    to: ConvertHourToMinutes(scheduleItem.to),
                    class_id: class_id
                };
            });

            /**
             * TODO (Try to know why it's not working)
             */
            /****************************************** Doesn't working, but why????  *********************************/
            // const classScheduleId = await trx.table('tab_class_schedules').insert({
            //     week_day: classSchedules.week_day,
            //     from: classSchedules.from,
            //     to: classSchedules.to,
            //     class_id: classSchedules.class_id
            // });

            // const classScheduleId = await trx.table('tab_class_schedules').insert({classSchedules}); // Doesn't working
            /********************************************************************************************************* */

            for (let i = 0; i < classSchedules.length; i++) {
                await trx.table('tab_class_schedules').insert({
                    week_day: classSchedules[i].week_day,
                    from: classSchedules[i].from,
                    to: classSchedules[i].to,
                    class_id
                });
            }

            await trx.commit();

            if (!trx.isCompleted()) {
                await trx.rollback();

                return response.status(400).json({
                    status: 400,
                    statusText: 'Bad request',
                    message: 'Something is wrong in your request'
                })
            }

            return response.status(201).send()

        } catch (exception) {
            const trx = await DBConnection.transaction();
            await trx.rollback();

            return response.status(400).json({
                status: 400,
                statusText: 'Bad request',
                message: 'Unexpected error occurred while creating a new class'
            })

        }
    }
}

export default ClassesController;