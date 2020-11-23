exports.up = function (knex, Promise) {
    return knex.schema.createTable('Mission_Activity_List', function (table) {
        table.integer('Mission_ID').primary().unique().notNullable()
            .references('Mission.Mission_ID');
        table.integer('Activity_ID').primary().unique().notNullable()
            .references('Activity.Activity_ID');
        table.timestamp('Create_At').defaultTo(knex.fn.now());
        table.timestamp('Update_At').defaultTo(knex.fn.now());
        table.integer('Admin_ID')
            .references('Admin_Information.Admin_ID');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Mission_Activity_List');
};