exports.up = function (knex, Promise) {
    return knex.schema.createTable('Activity', function (table) {
        table.integer('Activity_ID').primary().unique().notNullable();
        table.string('Activity_Name').unique();
        table.string('Activity_Description');
        table.integer('Categories_ID').references('Categories.Categories_ID');
        table.timestamp('Create_At').defaultTo(knex.fn.now());
        table.timestamp('Update_At').defaultTo(knex.fn.now());
        table.integer('Admin_ID')
            .references('Admin_Information.Admin_ID');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Activity');
};