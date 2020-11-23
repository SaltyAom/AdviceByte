exports.up = function (knex, Promise) {
    return knex.schema.createTable('Study_Cluster', function (table) {
        table.string('Cluster_ID').primary().unique().notNullable();
        table.string('Cluster_MBTI_ID');
        table.string('Cluster_Learning_Style_ID');
        table.string('Cluster_Name');
        table.string('Count');
        table.time('Create_At');
        table.time('Update_At');
        table.string('Admin_ID');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Activity');
};