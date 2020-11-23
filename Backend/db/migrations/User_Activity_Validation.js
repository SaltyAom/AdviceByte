exports.up = function (knex, Promise) {
    return knex.schema.createTable('User_Activity_Validation', function (table) {
        table.string('Validation_ID').primary().unique().notNullable();
        table.string('Submission_ID');
        table.string('User_ID');
        table.string('Skill_ID');
        table.string('Feedback');
        table.string('Score');
        table.time('Create_At');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Activity');
};