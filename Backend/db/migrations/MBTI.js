exports.up = function (knex, Promise) {
    return knex.schema.createTable('MBTI', function (table) {
        table.integer('MBTI_ID').primary().unique().notNullable();
        table.string('Type').unique();
        table.string('Type_Name').unique();
        table.string('Tag');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('MBTI');
};