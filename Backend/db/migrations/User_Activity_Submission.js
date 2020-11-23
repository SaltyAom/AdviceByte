exports.up = function (knex, Promise) {
    return knex.schema.createTable('User_Activity_Submission', function (table) {
        table.string('Submission_ID').primary().unique().notNullable();
        table.string('User_ID');
        table.string('Activity_ID');
        table.string('Categories_ID');
        table.string('Submission')
        table.time('Create_At');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Activity');
};