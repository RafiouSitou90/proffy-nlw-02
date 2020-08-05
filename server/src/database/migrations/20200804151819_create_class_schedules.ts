import Knex from "knex";

export async function up (knex: Knex): Promise<void> {
    return knex.schema.createTable('tab_class_schedules', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('tab_classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        ;

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
            .notNullable()
        ;
    });
}

export async function down (knex: Knex): Promise<void> {
    return knex.schema.dropTable('tab_class_schedules');
}
