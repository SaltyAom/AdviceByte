exports.up = function (knex, Promise) {
    return knex.schema.createTable('Role', function (table) {
        table.integer('Role_ID').primary().unique().notNullable();
        table.string('Name');
        table.integer('Permission');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Role');
};