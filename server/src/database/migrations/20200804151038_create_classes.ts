import Knex from "knex";

export async function up (knex: Knex): Promise<void> {
    return knex.schema.createTable('tab_classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

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
    return knex.schema.dropTable('tab_classes');
}
