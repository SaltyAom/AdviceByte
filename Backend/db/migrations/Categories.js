exports.up = function (knex, Promise) {
    return knex.schema.createTable('Categories', function (table) {
        table.integer('Categories_ID').primary().unique().notNullable();
        table.string('Categories_Name').unique();
        table.string('Categories_Description');
        table.timestamp('Create_At').defaultTo(knex.fn.now());
        table.timestamp('Update_At').defaultTo(knex.fn.now());
        table.integer('Admin_ID')
            .references('Admin_Information.Admin_ID');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Categories');
};