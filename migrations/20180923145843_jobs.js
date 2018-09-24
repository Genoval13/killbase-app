
exports.up = function(knex, Promise) {
    return knex.schema.createTable('jobs', (table) => {
        table.increments('jobId');
        table.integer('assassin').references('assassins.assassinId').onDelete('cascade');
        table.integer('target').references('contracts.contractId').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('jobs');
};
