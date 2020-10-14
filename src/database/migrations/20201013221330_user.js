exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.string('id').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password_hash').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
