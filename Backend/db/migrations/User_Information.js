exports.up = function (knex, Promise) {
    return knex.schema.createTable('User_Information', function (table) {
        table.integer('User_ID').primary().unique().notNullable();
        table.string('User_Name').unique();
        table.string('Password');
        table.string('First_Name');
        table.string('Last_Name');
        table.string('E_mail').unique();
        table.integer('MBTI_ID').references('MBTI.MBTI_ID');
        table.integer('Study_Cluster_ID').references('Study_Cluster.Study_Cluster_ID');
        table.float('Algorithm_Score');
        table.float('Data_Structure_Score');
        table.float('Programming_Score');
        table.float('Mathematic_Score');
        table.float('Language_Score');
        table.float('Communication_Score');
        table.float('Problem_Solving_Score');
        table.float('Self_Motivation_Score');
        table.timestamp('Create_At').defaultTo(knex.fn.now());
        table.timestamp('Update_At').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('User_Information');
};