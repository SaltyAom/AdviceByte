exports.up = function (knex, Promise) {
    return knex.schema.createTable('Skills', function (table) {
        table.integer('Skill_ID').primary().unique().notNullable();
        table.string('Name');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Skills');
};