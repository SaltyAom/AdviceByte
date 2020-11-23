exports.up = function (knex, Promise) {
    return knex.schema.createTable('Learning_Style', function (table) {
        table.integer('Learning_Style_ID').primary().unique().notNullable();
        table.string('Learning_Style_Name');
        table.string('Learning_Style_Description');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Learning_Style');
};