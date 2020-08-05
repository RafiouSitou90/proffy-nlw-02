import Knex from "knex";

export async function up (knex: Knex): Promise<void> {
    return knex.schema.createTable('tab_users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
            .notNullable()
        ;
    });
}

export async function down (knex: Knex): Promise<void> {
    return knex.schema.dropTable('tab_users');
}

