exports.up = function (knex, Promise) {
    return knex.schema.createTable('Admin_Information', function (table) {
        table.integer('Admin_ID').primary().unique().notNullable();
        table.string('Admin_User_Name').unique();
        table.string('Password');
        table.string('E_mail').unique();
        table.string('First_Name');
        table.string('Last_Name');
        table.integer('Role_ID')
            .references('Role.Role_ID');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Admin_information');
};