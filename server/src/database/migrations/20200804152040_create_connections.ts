import Knex from "knex";

export async function up (knex: Knex): Promise<void> {
    return knex.schema.createTable('tab_connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('tab_users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        ;

        table.timestamps(true, true);
    });
}

export async function down (knex: Knex): Promise<void> {
    return knex.schema.dropTable('tab_connections');
}

