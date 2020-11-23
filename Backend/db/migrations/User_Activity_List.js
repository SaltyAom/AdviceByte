exports.up = function (knex, Promise) {
    return knex.schema.createTable('User_Activity_List', function (table) {
        table.string('User_ID').primary().unique().notNullable();
        table.string('Activity_ID');
        table.string('Interest_Score');
        table.time('Update_At');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Activity');
};