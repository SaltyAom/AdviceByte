exports.up = function (knex, Promise) {
    return knex.schema.createTable('Categories_Skills', function (table) {
        table.integer('Categories_ID').primary().unique().notNullable()
            .references('Categories.Categories_ID');
        table.integer('Skill_ID').primary().unique().notNullable()
            .references('Skills.Skill_ID');
        table.float('weight');
        table.timestamp('Create_At').defaultTo(knex.fn.now());
        table.timestamp('Update_At').defaultTo(knex.fn.now());
        table.integer('Admin_ID')
            .references('Admin_Information.Admin_ID');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Categories_Skills');
};