import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  if (await knex.schema.hasTable('users')) {
    await knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('username', 255);
      table.timestamps();
    });
  } else {
    throw new Error('Table already exists');
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
