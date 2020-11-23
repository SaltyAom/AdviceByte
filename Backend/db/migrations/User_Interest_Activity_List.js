exports.up = function (knex, Promise) {
    return knex.schema.createTable('User_Interest_Activity_List', function (table) {
        table.integer('User_ID').primary().unique().notNullable()
            .references('User_Information.User_ID');
        table.integer('Activity_ID').primary().unique().notNullable()
            .references('Categories.Categories_ID');
        table.float('Interest_Score');
        table.timestamp('Update_At').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('User_Interest_Activity_List');
};