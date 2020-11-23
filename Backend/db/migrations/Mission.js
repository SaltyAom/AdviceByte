exports.up = function (knex, Promise) {
    return knex.schema.createTable('Mission', function (table) {
        table.integer('Mission_ID').primary().unique().notNullable();
        table.string('Mission_Name').unique();
        table.string('Mission_Description');
        table.timestamp('Create_At').defaultTo(knex.fn.now());
        table.timestamp('Update_At').defaultTo(knex.fn.now());
        table.integer('Admin_ID')
            .references('Admin_Information.Admin_ID');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Mission');
};